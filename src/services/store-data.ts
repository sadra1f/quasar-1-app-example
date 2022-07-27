import { ClientInterface } from 'src/services/interfaces';
import AxiosClient from 'src/services/axios-client';
import { StoreType } from './types';
import { PluginInterface, ServiceInterface } from 'src/store/data/state';

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

export function clearServices(store: StoreType) {
  store.commit('data/setServices', []);
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
        (response.data as { plugins: PluginInterface[] }).plugins
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export function clearPlugins(store: StoreType) {
  store.commit('data/setPlugins', []);
}

export function getPlugins(store: StoreType): PluginInterface[] {
  return (store.getters as { 'data/plugins': PluginInterface[] })[
    'data/plugins'
  ];
}
