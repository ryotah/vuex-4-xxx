<template>
  <main>
    <h1>Vuex demo</h1>
    <p>
      Classic components and Composition components refer to the same state.
    </p>
    <div class="examples">
      <section>
        <h2>Classic</h2>
        <div class="card"><CounterClassic /></div>
        <div class="card"><MessageListClassic /></div>
      </section>
      <section>
        <h2>Composition</h2>
        <div class="card"><Counter /></div>
        <div class="card"><MessageList /></div>
      </section>
    </div>
  </main>
  <pre>{{ $store.state }}</pre>
  <button @click="onReset">Reset</button>
  <div class="blocker" v-if="loading">Loading ...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Classic
import CounterClassic from "@/classic/Counter.vue";
import MessageListClassic from "@/classic/MessageList.vue";
// Composition
import Counter from "@/composition/Counter.vue";
import MessageList from "@/composition/MessageList.vue";

import { context } from "@/store";

export default defineComponent({
  components: {
    CounterClassic,
    MessageListClassic,
    Counter,
    MessageList
  },
  computed: {
    loading(): boolean {
      return context.modules.ui.state.loading;
    }
  },
  methods: {
    onReset() {
      context.dispatch("reset");
    }
  }
});
</script>

<style scoped>
.examples {
  display: grid;
  grid-gap: 0 16px;
  grid-template-columns: repeat(2, 1fr);
}
.card {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid darkgray;
}
.blocker {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
