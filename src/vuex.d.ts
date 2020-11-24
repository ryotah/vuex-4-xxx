// https://github.com/vuejs/vuex/blob/v4-docs/docs/guide/typescript-support.md

// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { RootState } from "@/store/";

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
