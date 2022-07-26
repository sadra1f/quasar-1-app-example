import { MutationTree } from 'vuex';
import {
  DataStateInterface,
  PluginsInterface,
  ServiceInterface,
} from './state';

const mutation: MutationTree<DataStateInterface> = {
  setServices(state: DataStateInterface, data: ServiceInterface[]) {
    state.services = data;
  },
  setPlugins(state: DataStateInterface, data: PluginsInterface[]) {
    state.plugins = data;
  },
};

export default mutation;
