import Hccaptcha from './src/index.vue';

Hccaptcha.install = Vue => {
  Vue.component(Hccaptcha.name, Hccaptcha);
};

export default Hccaptcha;
