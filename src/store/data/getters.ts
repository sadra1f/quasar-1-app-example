import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DataStateInterface } from './state';

const getters: GetterTree<DataStateInterface, StateInterface> = {
  services(state: DataStateInterface) {
    return state.services;
  },
  plugins(state: DataStateInterface) {
    return state.plugins;
  },
};

export default getters;
