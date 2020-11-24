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
import { accessor } from "@/store";

const { messageList: mapper } = accessor;

export default defineComponent({
  setup() {
    const template = "Hey there! 👋";

    return {
      messages: computed(() => mapper.messages),
      unread: computed(() => mapper.unread),
      onClickAddMessage: () =>
        mapper.addMessage({
          value: template,
          read: false
        })
    };
  }
});
</script>

<style scoped>
.read {
  text-decoration: line-through;
}
</style>
