<template>
  <el-radio-group
    :value="value"
    :disabled="disabled"
    :size="size"
    :text-color="textColor"
    :fill="fill"
    @change="change"
  >
    <slot></slot>
  </el-radio-group>
</template>
<script>
export default {
  name: "y-radio-group",
  props: {
    value: [Boolean, String, Number],
    disabled: Boolean,
    size: String,
    textColor: String,
    fill: String,
    change: Function
  },
  components: {},
};
</script>
 
<style scoped>
</style>
 