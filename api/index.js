const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require ('dotenv').config()

const { PGPORT } = process.env
// Syncing all the models at once.
conn.sync({ alter:true }).then(() => {
  server.listen(PGPORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
