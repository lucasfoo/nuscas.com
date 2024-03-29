declare module '*.vue' {
  import Vue from 'vue'
  import { defineComponent } from "vue";
  const moment = require('moment');
  const component: ReturnType<typeof defineComponent>;
  export default component;
  export default Vue
}
