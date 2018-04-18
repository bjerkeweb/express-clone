let handlers = {};

function match( req ) {
  return handlers[ req.url ];
}

function get( path, handler ) {
  handlers[ path ] = handler;
}

module.exports = { match, get }
