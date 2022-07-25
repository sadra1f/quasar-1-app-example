import { createServer, Model } from 'miragejs';

import { services, plugins } from './api-data';

const createMockServer = () => {
  return createServer({
    models: {
      service: Model,
      plugin: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/marketing', (schema /*, request*/) => {
        return schema.all('plugin').models;
      });
    },
    seeds(server) {
      services.forEach((item) => {
        server.create('service', item);
      });

      plugins.forEach((item) => {
        server.create('plugin', item);
      });
    },
  });
};

export { createMockServer };
