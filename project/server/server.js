const { Igniter } = require('@ngasemjs/server-igniter');
const package = require('./package.json');

Igniter
  .register(__dirname)
  .listen(() => console.log(`${package.name} has been started`))
  .catch(console.log);
