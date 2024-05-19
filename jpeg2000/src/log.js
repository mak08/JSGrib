const debug = false

function info (...args) {
  if (debug) {
    console.log('INFO', ...args)
  }
}

function warn (...args) {
  if (debug) {
    console.log('WARN', ...args)
  }
}

export {
    info,
    warn
}
