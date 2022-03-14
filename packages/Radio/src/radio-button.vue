<template>
  <el-radio-group :disabled="disabled" :name="name" :label="label">
    <slot></slot>
  </el-radio-group>
</template>
<script>
export default {
  name: "y-radio-button",
  props: {
    disabled: Boolean,
    name: String,
    label: String,
  },
  components: {},
};
</script>
 
<style scoped>
</style>
 