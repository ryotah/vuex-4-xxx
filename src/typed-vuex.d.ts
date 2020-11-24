import { ComponentCustomProperties } from "vue";
import { accessor } from "@/store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $accessor: typeof accessor;
  }
}
