import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { DataStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const dataModule: Module<DataStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default dataModule;
