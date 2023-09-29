# HCCAPTCHA

HCCAPTCHA是由青岛中学HCC项目开发社团开发和运营的验证码系统，旨在为开发者提供一个简单易用的可自行部署的验证码系统。

## 使用示例

```vue
<script setup>
import { Hccaptcha } from 'hccaptcha-vue';
import { ref } from 'vue';

const captcha = ref(null), code = ref(undefined);

// Refresh
// captcha.value.refresh();
// Reset
// captcha.value.reset();
</script>

<template>
    <Hccaptcha ref="captcha" v-model:code="code" />
</template>
```
