import Hccaptcha from './Hccaptcha';

const components = [Hccaptcha];

const CaptchaInstall = Vue => {
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  CaptchaInstall(window.Vue);
}

export { CaptchaInstall, Hccaptcha };
