// This shim allows TypeScript to understand .vue files in a Vue 3 project

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
