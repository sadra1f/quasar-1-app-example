import { MutationTree } from 'vuex';
import { DataStateInterface, PluginInterface, ServiceInterface } from './state';

const mutation: MutationTree<DataStateInterface> = {
  setServices(state: DataStateInterface, data: ServiceInterface[]) {
    state.services = data;
  },
  setPlugins(state: DataStateInterface, data: PluginInterface[]) {
    state.plugins = data;
  },
};

export default mutation;
