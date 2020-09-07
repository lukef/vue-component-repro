<template>
  <div class="base-component">
    <div class="message">{{ message }}</div>
    <slot name="something"></slot>
  </div>
</template>

<script>
export default {
  name: "base-component",
  props: {
    message: undefined
  }
};
</script>

<style lang="scss" scoped>
.message {
  color: limegreen;
}
</style>
