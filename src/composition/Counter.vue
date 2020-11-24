<template>
  Clicked: {{ count }} times, count is {{ evenOrOdd }}.
  <button @click="onIncrement">+</button>
  <button @click="onDecrement">-</button>
</template>

<script lang="ts">
import { storeKey } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { state, getters, dispatch } = useStore(storeKey);

    return {
      count: computed(() => state.counter.count),
      evenOrOdd: computed(() => getters["evenOrOdd"]),
      onIncrement: () => dispatch("increment", 1),
      onDecrement: () => dispatch("decrement", 1)
    };
  }
});
</script>
