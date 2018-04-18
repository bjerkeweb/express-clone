const http = require('http');
const routes = require('./routes');
const response = require('./response');

function createApp() {

  let server = http.createServer( ( req, res ) => {

    response( res );

    let handler = routes.match( req );

    if ( !handler ) {
      res.writeHead( 200 );
      res.end( 'Route not found' )
      return;
    }

    handler( req, res );

  });

  function listen( port ) {
    server.listen( port );
    console.log( `Server listening on port: ${ port }` );
  }

  return { listen, get: routes.get };

}

module.exports = createApp;
