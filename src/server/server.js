import { Server } from 'miragejs';
import baseUserModel from './data/db';
import {
  getFrom,
  getFromById,
  postFrom,
  patchFrom,
  removeFrom,
} from './methods/index';

window.server = new Server({
  seeds(currentServer) {
    currentServer.db.loadData({ ...baseUserModel });
  },

  routes() {
    this.passthrough();

    this.passthrough('https://jsonplaceholder.typicode.com/**');

    this.namespace = 'api';

    this.timing = 800;

    this.get('/users', getFrom('users'));

    this.get('/users/:id', getFromById('users'));

    this.post('/users', postFrom('users'));

    this.patch('/users/:id', patchFrom('users'));

    this.delete('/users/:id', removeFrom('users'));
  },
});
