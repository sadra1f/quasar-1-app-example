import { createServer, Model } from 'miragejs';

import { services, plugins } from './api-data';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type serviceType = ArrayElement<typeof services>;
type pluginType = ArrayElement<typeof plugins>;

const createMockServer = () => {
  return createServer({
    models: {
      service: Model,
      plugin: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/services', (schema) => {
        return schema.all('service');
      });

      this.get('/services/:service', (schema, request) => {
        return schema.findBy('service', {
          slug: request.params.service,
        } as serviceType);
      });

      this.get('/services/:service/plugins', (schema, request) => {
        const serviceId = schema.findBy('service', {
          slug: request.params.service,
        } as serviceType)?.id;

        if (serviceId) {
          return schema.all('plugin').filter((item) => {
            return (item.attrs as pluginType).service_id == serviceId;
          });
        }
        return {};
      });

      this.get('/services/:service/plugins/:id', (schema, request) => {
        const serviceId = schema.findBy('service', {
          slug: request.params.service,
        } as serviceType)?.id;

        if (serviceId) {
          return schema.findBy('plugin', {
            id: request.params.id,
            service_id: serviceId,
          } as pluginType);
        }
        return {};
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
