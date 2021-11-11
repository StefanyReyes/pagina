import { createStore } from "vuex";

export default createStore({
  state: {
    nombre:'',
    cualTitulo:"",
  },
  mutations: {
    guardarNombre(state, nuevo){
      state.nombre = nuevo
    }
  },
  actions: {},
  modules: {},
});
