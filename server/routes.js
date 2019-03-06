/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports =  function(app) {
  // Insert routes below
  app.use('/api/orders', require('./api/order'));
  app.use('/api/carts', require('./api/cart'));
  app.use('/api/cards', require('./api/card'));
  app.use('/api/reservetables', require('./api/reservetable'));
  app.use('/api/address', require('./api/address'));
  app.use('/api/items', require('./api/item'));
  // app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/api/upload', require('./api/upload'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the app.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
    });
}
