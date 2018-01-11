<template>
    <div>
        <div class="loading-style">{{msg}}</div>
    </div>
</template>
<style lang="less" scoped>
    .loading-style {
        font-size: 2vh;
        font-weight: bold;
    }
</style>
<script>
  export default {
    data () {
      return {
        msg: '加载中。。。'
      }
    },
  }
</script>
