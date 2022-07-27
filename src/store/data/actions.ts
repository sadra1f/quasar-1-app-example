import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DataStateInterface, PluginInterface, ServiceInterface } from './state';

const actions: ActionTree<DataStateInterface, StateInterface> = {
  updateServices(context, data: ServiceInterface[]) {
    context.commit('setServices', data);
  },
  updatePlugins(context, data: PluginInterface[]) {
    context.commit('setPlugins', data);
  },
};

export default actions;
