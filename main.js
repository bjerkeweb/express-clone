const express = require('./express');
const config = require('./config');
const port = config['port'];

let app = express();
app.listen( port );

app.get( '/hello', ( req, res ) => {
  res.send('Hello')
});

app.get( '/bye', ( req, res ) => {
  res.send('Goodbye')
});

app.get( '/greet', ( req, res ) => {
  res.redirect('/hello');
});

app.get( '/json', ( req, res ) => {
  res.json({ greeting: 'hello' });
});
