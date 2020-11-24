<template>
  Clicked: {{ count }} times, count is {{ evenOrOdd }}.
  <button @click="onIncrement">+</button>
  <button @click="onDecrement">-</button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { context } from "@/store";

const { counter: mapper } = context.modules;

export default defineComponent({
  setup() {
    return {
      count: computed(() => mapper.state.count),
      evenOrOdd: computed(() => mapper.getters["evenOrOdd"]),
      onIncrement: () => mapper.dispatch("increment", 1),
      onDecrement: () => mapper.dispatch("decrement", 1)
    };
  }
});
</script>
