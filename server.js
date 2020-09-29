const functions = require('firebase-functions');
const next = require('next');
const config = require('./next.config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, config });
const handle = app.getRequestHandler();

exports.server = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
