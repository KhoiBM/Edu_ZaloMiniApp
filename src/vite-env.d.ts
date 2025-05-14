/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vue-router/routemeta" />


// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file. Make sure it's included in
// project's tsconfig.json "files"
import 'vue-router'

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}





// // To ensure it is treated as a module, add at least one `export` statement
// export { }

declare module 'vue-router' {
  interface RouteMeta {
    // must be declared by every route
    requiresAuth: boolean,
    transition: string,
  }
}