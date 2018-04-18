function response( res ) {

  res.send = body => {
    res.writeHead( 200, {
      'Content-Type': 'text/plain',
      'Content-Length': body.length
    });
    res.end( body );
  }

  res.json = body => {
    body = JSON.stringify( body );
    res.writeHead( 200, {
      'Content-Type': 'application/json',
      'Content-Length': body.length
    });
    res.end( body );
  }

  res.redirect = url => {
    res.setHeader( 'Location', url );
    res.writeHead( 301 );
    res.end();
  }

  return res;

}

module.exports = response;
