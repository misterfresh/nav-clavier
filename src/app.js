import Vue from './../build/vue.esm.browser.js';
import { AppNavigation } from './../src/AppNavigation.js';

new Vue({
  el: '#app-mount',
  template: `<div>
        <AppNavigation/>
    </div>`,
  components: {
    AppNavigation,
  },
});
