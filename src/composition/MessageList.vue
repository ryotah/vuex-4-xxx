<template>
  <div>You have {{ unread.length }} unread messages</div>
  <ul>
    <li v-for="(m, i) in messages" :key="i" :class="{ read: m.read }">
      {{ m.value }}
    </li>
  </ul>
  <button @click="onClickAddMessage">Add message</button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { context } from "@/store";

const { messageList: mapper } = context.modules;

export default defineComponent({
  setup() {
    const template = "Hey there! 👋";

    return {
      messages: computed(() => mapper.state.messages),
      unread: computed(() => mapper.getters.unread),
      onClickAddMessage: () =>
        mapper.actions.addMessage({
          value: template,
          read: false
        })
      // Or mapper.dispatch("addMessage", { ... })
    };
  }
});
</script>

<style scoped>
.read {
  text-decoration: line-through;
}
</style>
