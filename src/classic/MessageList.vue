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
import { defineComponent } from "vue";
import { context } from "@/store";

const { messageList: mapper } = context.modules;

export default defineComponent({
  data() {
    return {
      template: "Hey there! 👋"
    };
  },
  computed: {
    messages: () => mapper.state.messages,
    unread: () => mapper.getters.unread
  },
  methods: {
    onClickAddMessage() {
      mapper.actions.addMessage({
        value: this.template,
        read: false
      });
    }
  }
});
</script>

<style scoped>
.read {
  text-decoration: line-through;
}
</style>
