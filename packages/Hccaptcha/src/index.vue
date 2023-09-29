<script setup>
import 'hccaptcha';
import { ref, onMounted } from 'vue';

const captcha = ref(null);

defineProps({
  code: { default: undefined },
});

const emits = defineEmits(['update:code']);

const refresh = async () => {
  await captcha.value.refresh();
};
const reset = async () => {
  await captcha.value.reset();
  emits('update:code', undefined);
};
const onSuccess = code => {
  emits('update:code', code);
};

defineExpose({
  refresh,
  reset,
});

onMounted(() => {
  captcha.value.onSuccess = onSuccess;
});
</script>

<template>
  <hcc-captcha ref="captcha" />
</template>
