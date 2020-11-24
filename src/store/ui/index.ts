import { ActionTree, MutationTree } from "vuex";
import { RootState } from "@/store";

export function initialState() {
  return { loading: false };
}

export type State = ReturnType<typeof initialState>;

const mutations: MutationTree<State> = {
  showLoading(state) {
    state.loading = true;
  },
  hideLoading(state) {
    state.loading = false;
  }
};

const actions: ActionTree<State, RootState> = {
  showLoading({ commit }) {
    commit("showLoading");
  },
  hideLoading({ commit }) {
    commit("hideLoading");
  }
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
};
