import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import {
  DataStateInterface,
  PluginsInterface,
  ServiceInterface,
} from './state';

const actions: ActionTree<DataStateInterface, StateInterface> = {
  updateServices(context, data: ServiceInterface[]) {
    context.commit('setServices', data);
  },
  updatePlugins(context, data: PluginsInterface[]) {
    context.commit('setPlugins', data);
  },
};

export default actions;
