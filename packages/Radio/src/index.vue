<template>
  <el-radio
    :value="value"
    :border="border"
    :disabled="disabled"
    :name="name"
    :size="size"
    :label="label"
    @change="change"
  >
    <slot></slot>
  </el-radio>
</template>
<script>
export default {
  name: "y-radio",
  props: {
    value: [Boolean, String, Number],
    label: [Boolean, String, Number],
    disabled: Boolean,
    border: Boolean,
    size: String,
    name: String,
    change: Function,
  },
  components: {},
};
</script>
 
<style scoped>
</style>
 