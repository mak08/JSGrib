(in-package :jsgrib)

(defstruct (section (:constructor section (section name fields))) section name fields (templates ()))
(defstruct (template (:constructor template (section template fields))) section template fields)
(defstruct (field (:constructor field (name octets type)))
  name octets type)
(defstruct (codetable (:constructor codetable (discipline category entries)))
  discipline category entries)
(defstruct (code (:constructor code  (code description unit shortname)))
  code description unit shortname)

(defun generate-json (section-file-name template-file-name codetable-file-name outfilename)
  (let ((sections (parse-sections section-file-name))
        (templates (parse-templates template-file-name))
        (codetables (parse-codetables codetable-file-name)))
    (dolist (template templates)
      (let ((section
              (find-if (lambda (section)
                         (equalp (section-section section) (template-section template)))
                       sections)))
        (format t "Adding template ~a to section ~a~%"
                (template-template template)
                (section-section section))
        (push template (section-templates section))))
    (with-open-file (out outfilename :direction :output :if-exists :supersede :if-does-not-exist :create)
      (format out "~a" "const GRIB2_SECTIONS = ")
      (json out sections)
      (format out "~%")
      (format out "~a" "const GRIB2_CODETABLES = ")
      (json out codetables)
      (format out "~%~a~%" "export { GRIB2_SECTIONS, GRIB2_CODETABLES }"))))

(defun parse-sections (infilename)
  (with-open-file (in infilename)
    (loop
      :with sections = ()
      :with section = ()
      :with section-name = ""
      :with section-number = ""
      :for line = (read-line in nil nil)
      :for _ =   (format t "LINE: ~a~%" line)
      :while line
      :do (cond
            ((= (length line) 0))
            ((char= (aref line 0) #\;))
            ((eql (search "Section" line) 0)
             (when section
               (push (section section-number section-name (nreverse section)) sections))
             (setf section ())
             (destructuring-bind (number name)
                 (cl-utilities:split-sequence #\: (subseq line 8) :count 2 :remove-empty-subseqs t)
               (setf section-name (substitute #\_ #\space (string-trim " " name)))
               (setf section-number number)))
            (t
             (push (parse-line line) section)))
      :finally 
         (return (nreverse (push (section section-number section-name (nreverse section))
                                 sections))))))

(defun parse-templates (infilename)
  (with-open-file (in infilename)
    (loop
      :with templates = ()
      :with fields = ()
      :with section-number = ""
      :with template-number = ""
      :for line = (read-line in nil nil)
      :for _ =   (format t "LINE: ~a~%" line)
      :while line
      :do (cond
            ((= (length line) 0))
            ((char= (aref line 0) #\;))
            ((eql (search "Section" line) 0)
             (when fields
               (push (template section-number template-number (nreverse fields)) templates))
             (setf fields ())
             (destructuring-bind (sec sec-num hyphen templ templ-num &rest description)
                 (cl-utilities:split-sequence #\space line :remove-empty-subseqs t)
               (setf section-number sec-num)
               (setf template-number templ-num)))
            (t
             (push (parse-line line) fields)))
      :finally 
         (return (nreverse (push (template section-number template-number (nreverse fields))
                                 templates))))))

(defun parse-line (line)
  (destructuring-bind  (octets key type)
      (cl-utilities:split-sequence #\space line :count 3 :remove-empty-subseqs t)
    (field key octets type)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defun parse-codetables (infilename)
  (with-open-file (in infilename)
    (loop
      :with codetables = ()
      :with name = nil
      :with discipline = nil
      :with category = nil
      :with entries = ()
      :for line = (read-line in nil nil)
      :for _ =   (format t "LINE: ~a~%" line)
      :while line
      :do (cond
            ((= (length line) 0))
            ((char= (aref line 0) #\;))
            ((char= (aref line 0) #\=)
             (when discipline
               (push (codetable discipline category (nreverse entries))
                     codetables)
               (setf entries ()))
             (destructuring-bind (pref key1 _discipline key2 _category _name suff)
                 (cl-utilities:split-sequence #\space line :remove-empty-subseqs t)
               (setf name _name)
               (setf discipline _discipline)
               (setf category _category)))
            (t
             (destructuring-bind  (code description unit shortname)
                 (cl-utilities:split-sequence #\| line)
               (push (code code (substitute #\space #\" description) unit shortname) entries))))
      :finally (return (nreverse
                        (push (codetable discipline category (nreverse entries))
                              codetables))))))

;;; EOF
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
