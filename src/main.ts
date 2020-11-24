import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import store, { accessor } from "./store";

const app = createApp(App).use(store);

// Note:
// You can also use
// - The injection key, `.use(store, storeKey)`
// -  or can provide the `accessor` by us.
// However, I would like to limit the usage of the store to only
// `import { accessor } from "@/store";` or `this.$accessor` for simplicity.
//
// const app = createApp(App)
//   .use(store, storeKey)
//   .provide(accessorKey, accessor);

// Optionally, inject accessor globally
app.config.globalProperties.$accessor = accessor;
// In Vue 3, we need to use `globalProperties` instead of `Vue.prototype`
// https://v3.vuejs.org/api/application-config.html#globalproperties

app.mount("#app");
