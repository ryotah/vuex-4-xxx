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
import { accessor } from "@/store";

const { messageList: mapper } = accessor;

export default defineComponent({
  data() {
    return {
      template: "Hey there! 👋"
    };
  },
  computed: {
    messages: () => mapper.messages,
    unread: () => mapper.unread
  },
  methods: {
    onClickAddMessage() {
      mapper.addMessage({
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
