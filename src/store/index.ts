import { InjectionKey } from "vue";
import { ActionTree, createStore, Store } from "vuex";
import counter, { State as counterState } from "./counter";
import messageList, { State as messageListState } from "./message-list";
import ui, { State as uiState } from "./ui";

export type RootState = {
  counter: counterState;
  messageList: messageListState;
  ui: uiState;
};

const actions: ActionTree<{}, RootState> = {
  reset({ dispatch }) {
    dispatch("messageList/reset");
    // dispatch("xxx/reset");
    // ...
    //
    // Note:
    // Or each module catches this event.
  }
};

export default createStore({
  actions,
  modules: {
    counter,
    messageList,
    ui
  },
  strict: true,
  devtools: true
});

// Define an injection key
export const storeKey: InjectionKey<Store<RootState>> = Symbol();
