function routes() {

  let handlers = {};

  function match( req ) {
    return handlers[ req.url ];
  }

  function get( path, handler ) {
    handlers[ path ] = handler;
  }

  return { get, match };

}

module.exports = routes();
