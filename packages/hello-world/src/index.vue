<template>
  <div>
    <p class="demo-box">This is {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: 'world',
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
