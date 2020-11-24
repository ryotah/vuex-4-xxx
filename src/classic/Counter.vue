<template>
  Clicked: {{ count }} times, count is {{ evenOrOdd }}.
  <button @click="onIncrement">+</button>
  <button @click="onDecrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { accessor } from "@/store";

const { counter: mapper } = accessor;

export default defineComponent({
  computed: {
    count: () => mapper.count,
    evenOrOdd: () => mapper.evenOrOdd
  },
  methods: {
    onIncrement() {
      mapper.increment(1);
    },
    onDecrement() {
      mapper.decrement(1);
    }
  }
});
</script>
