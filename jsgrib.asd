;;; -*- lisp -*- ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Description
;;; Author         Michael Kappert
;;; Created        22/03/2000 11:15:16
;;; Last Modified  <michael 2024-05-28 18:45:59>

(defsystem "jsgrib"
  :description "Translate GRIB2 tables to JSON"
  :default-component-class cl-source-file.cl
  :depends-on ("log2" "parse-float" "makros")
  :serial t
  :components ((:file "package")
               (:file "jsgrib")))

;;; EOF
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
