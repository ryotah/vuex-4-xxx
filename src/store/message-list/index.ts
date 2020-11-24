import {
  Actions,
  Mutations,
  Getters,
  Module,
  createMapper
} from "vuex-smart-module";
import { context } from "@/store";

export type Message = {
  value: string;
  read: boolean;
};

class LocalState {
  messages: Message[] = [
    {
      value: "What's going on? 👋",
      read: true
    }
  ];
}

class LocalGetters extends Getters<LocalState> {
  get unread() {
    return this.state.messages.filter(message => message.read);
  }
}

class LocalMutations extends Mutations<LocalState> {
  addMessage(payload: Message) {
    this.state.messages.push(payload);
  }
  reset() {
    Object.assign(this.state, new LocalState());
  }
}

class LocalActions extends Actions<
  LocalState,
  LocalGetters,
  LocalMutations,
  LocalActions
> {
  async addMessage(payload: Message) {
    context.modules.ui.commit("showLoading");
    this.commit(
      "addMessage",
      await new Promise(resolve => setTimeout(() => resolve(payload), 300))
    );
    context.modules.ui.commit("hideLoading");
  }
  reset() {
    this.commit("reset");
  }
}

const module = new Module({
  state: LocalState,
  getters: LocalGetters,
  mutations: LocalMutations,
  actions: LocalActions
});

// Create mapper
export const messageListMapper = createMapper(module);

export default module;
