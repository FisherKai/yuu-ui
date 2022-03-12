<template>
  <el-button
    :type="type"
    :size="size"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :autofocus="autofocus"
    :native-type="nativeType"
  >
    <slot></slot>
  </el-button>
</template>
<script>
import { Button } from "element-ui";
export default {
  name: "y-button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String,
  },
  components: {
    "el-button": Button,
  }
};
</script>
 
<style scoped>
.y-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
 