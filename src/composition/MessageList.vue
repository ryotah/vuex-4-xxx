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
import { storeKey } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { state, getters, dispatch } = useStore(storeKey);
    const template = "Hey there! 👋";

    return {
      messages: computed(() => state.messageList.messages),
      unread: computed(() => getters["messageList/unread"]),
      onClickAddMessage: () =>
        dispatch("messageList/addMessage", {
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
