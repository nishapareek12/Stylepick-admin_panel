const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Specify the primary key (e.g., 'Merchant_ID') for your data
router.db._.id = 'Merchant_ID';

server.use(middlewares);
server.use(router);

server.listen(3006, () => {
  console.log('JSON Server is running');
});
