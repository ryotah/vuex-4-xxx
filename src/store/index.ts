import { createStore, createLogger } from "vuex";
import counter from "./counter";
import messageList from "./message-list";
import ui from "./ui";
import { useAccessor, actionTree } from "typed-vuex";

const actions = actionTree(
  {
    state: {}
  },
  {
    reset() {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      accessor.messageList.reset();
      // accessor.xxx.reset();
      // ...
      //
      // Note:
      // Or each module catches this event.
    }
  }
);

const storePattern = {
  actions,
  modules: {
    counter,
    messageList,
    ui
  },
  strict: true,
  devtools: true,
  plugins: [createLogger()]
};
const store = createStore(storePattern);

export const accessor = useAccessor(store, storePattern);

export default store;
