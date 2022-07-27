import { ClientInterface } from 'src/services/interfaces';
import AxiosClient from 'src/services/axios-client';
import { StoreType } from './types';
import { PluginsInterface, ServiceInterface } from 'src/store/data/state';

export function storeServices(store: StoreType) {
  const client: ClientInterface = new AxiosClient();

  client
    .get('api/services')
    .then((response) => {
      store.commit(
        'data/setServices',
        (response.data as { services: ServiceInterface[] }).services
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getServices(store: StoreType): ServiceInterface[] {
  return (store.getters as { 'data/services': ServiceInterface[] })[
    'data/services'
  ];
}

export function storePlugins(store: StoreType, serviceSlug: string) {
  const client: ClientInterface = new AxiosClient();

  client
    .get(`api/services/${serviceSlug}/plugins`)
    .then((response) => {
      store.commit(
        'data/setPlugins',
        (response.data as { plugins: PluginsInterface[] }).plugins
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getPlugins(store: StoreType): PluginsInterface[] {
  return (store.getters as { 'data/plugins': PluginsInterface[] })[
    'data/plugins'
  ];
}
