<template>
    <div>
        <div class="container">
            <div class="" v-for="(img,index) in imgArray">
                <a :href="img.link"><img class="img-style" :class="{'img-left' : index == 1}" :src="img.src"></a>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .container {
        display: flex;
        margin-top: 1vh;
        .img-style {
            width: 44vw;
        }
        .img-left {
            margin-left: 3vw;
        }
    }
</style>
<script>

  export default {
    data () {
      return {
        imgArray: [
          {
            src: require('../assets/activity-pic1.png'),
            link: 'http://changshi.wo.cn',
          },
          {
            src: require('../assets/activity-pic1.png'),
            link: 'http://wotv.17wo.cn',
          }
        ]
      }
    }
  }
</script>
