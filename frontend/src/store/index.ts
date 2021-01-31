import Vue from 'vue';
import Vuex from 'vuex';
import DomainModule from './modules/DomainModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    DomainModule
  }
});