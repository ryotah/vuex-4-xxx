import { getterTree, mutationTree, actionTree } from "typed-vuex";
import { accessor } from "@/store";

export type Message = {
  value: string;
  read: boolean;
};

export function initialState(): { messages: Message[] } {
  return {
    messages: [
      {
        value: "What's going on? 👋",
        read: true
      }
    ]
  };
}

const getters = getterTree(initialState, {
  unread(state) {
    return state.messages.filter(message => message.read);
  }
});

const mutations = mutationTree(initialState, {
  addMessage(state, payload: Message) {
    state.messages.push(payload);
  },
  reset(state) {
    Object.assign(state, initialState());
  }
});

const actions = actionTree(
  { state: initialState, mutations },
  {
    async addMessage({ commit }, payload: Message) {
      accessor.ui.showLoading();
      commit(
        "addMessage",
        await new Promise(resolve => setTimeout(() => resolve(payload), 300))
      );
      accessor.ui.hideLoading();
    },
    reset({ commit }) {
      commit("reset");
    }
  }
);

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
