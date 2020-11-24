<template>
  Clicked: {{ count }} times, count is {{ evenOrOdd }}.
  <button @click="onIncrement">+</button>
  <button @click="onDecrement">-</button>
</template>

<script lang="ts">
import { accessor } from "@/store";
import { computed, defineComponent } from "vue";

const { counter: mapper } = accessor;

export default defineComponent({
  setup() {
    return {
      count: computed(() => mapper.count),
      evenOrOdd: computed(() => mapper.evenOrOdd),
      onIncrement: () => mapper.increment(1),
      onDecrement: () => mapper.decrement(1)
    };
  }
});
</script>
