import { createLogger } from "vuex";
import { Actions, Module, createStore } from "vuex-smart-module";
import counter from "./counter";
import messageList from "./message-list";
import ui from "./ui";

class IndexActions extends Actions {
  reset() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    context.modules.messageList.dispatch("reset"); // Or context.modules.messageList.actions.reset();
    // context.modules.xxx.dispatch("reset");;
    // ...
    //
    // Note:
    // ~~Or each module catches this event.~~
  }
}

export const root = new Module({
  actions: IndexActions,
  modules: { counter, messageList, ui }
});

const store = createStore(root, {
  strict: true,
  devtools: true,
  plugins: [createLogger()]
});

// Get root context
export const context = root.context(store);

export default store;
