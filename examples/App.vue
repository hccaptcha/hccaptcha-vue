<script setup>
import { Hccaptcha } from '../packages';
import { ref } from 'vue';

const captcha = ref(null);
let code = ref(undefined);

const refresh = () => captcha.value.refresh();
const reset = () => captcha.value.reset();

defineExpose({
  refresh,
  reset,
});
</script>

<template>
  <Hccaptcha ref="captcha" v-model:code="code" />
  <button @click="refresh">Refresh</button>
  <button @click="reset">Reset</button>
  {{ code }}
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
