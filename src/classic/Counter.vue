<template>
  Clicked: {{ count }} times, count is {{ evenOrOdd }}.
  <button @click="onIncrement">+</button>
  <button @click="onDecrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { context } from "@/store";

const { counter: mapper } = context.modules;

import { counterMapper } from "@/store/counter";

export default defineComponent({
  computed: {
    ...counterMapper.mapState(["count"]),
    ...counterMapper.mapGetters(["evenOrOdd"])
    // Or
    // count: () => mapper.state.count,
    // evenOrOdd: () => mapper.getters.evenOrOdd
  },
  methods: {
    onIncrement() {
      mapper.dispatch("increment", 1);
    },
    onDecrement() {
      mapper.actions.decrement(1);
    }
  }
});
</script>
