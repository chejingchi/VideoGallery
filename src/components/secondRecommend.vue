<template>
    <div @scroll="refreshRecommends">
        <div class="container recommend-div" v-for="recommend in recommendArr">
            <div class="recommend-container">
                <div class="pic-div">
                    <img :src="recommend.src">
                </div>
                <div class="activity-details">
                    <div>
                        <span class="title">活动主题：</span>
                        <span>{{recommend.subject}}</span>
                    </div>
                    <div>
                        <span class="title">活动时间：</span>
                        <span>{{recommend.time}}</span>
                    </div>
                    <div>
                        <span class="title">活动范围：</span>
                        <span>{{recommend.range}}</span>
                    </div>
                    <div>
                        <span class="title">参与对象：</span>
                        <span>{{recommend.object}}</span>
                    </div>
                </div>
                <router-link tag="a" :to="{name: 'detail',query:{id:recommend.productId}}">
                    <div class="understand-details-btn">
                        <img src="../assets/understand-details.png">
                    </div>
                </router-link>
            </div>
            <div class="circle-divide">
            </div>
        </div>
        <bottom v-show="bottomFlag"></bottom>
        <loading v-show="!bottomFlag"></loading>
    </div>
</template>
<style lang="less" scoped>
    .container {
        .recommend-container {
            margin-top: 4vh;
            border: 2px solid #ed8152;
            width: 84vw;
            margin-left: 7vw;
            height: 33vh;
            .pic-div {
                img {
                    width: 84vw;
                    height: 20vh;
                }
            }
            .activity-details {
                text-align: left;
                .title {
                    color: #f08f3a;
                    font-weight: 900;
                }
            }
            .understand-details-btn {
                img {
                    width: 70vw;
                    margin-top: 1vh;
                }
            }
        }
        .circle-divide {
            border-bottom: 5px dotted #f08f3a;
            margin-top: 5vh;
        }
    }

</style>
<script>
  import bottom from "../components/bottom"
  import loading from "../components/loading"
  import newProduct from "../util/newProduct"

  export default {
    data () {
      return {
        recommendArr: [],
        boomArr: newProduct.boomArr,
        freeDataArr: newProduct.freeDataArr,
        pointDataArr: newProduct.pointDataArr,
        retArr: [],
        bottomFlag: false,
        recommendIndex: 0,
        firstStep: 0,
        arrFlag: 3,

      }
    },
    components: {
      bottom,
      loading
    },
    created: function () {
      //设置推荐位置初始化
      this.retArr = this.boomArr.concat(this.freeDataArr);
      this.retArr = this.retArr.concat(this.pointDataArr);
      this.recommendArr = this.retArr.slice(0, 3);
      this.recommendIndex += 1;
      //监听事件
      this.$root.Bus.$on("changeRecommend", value => {
        this.changeRecommends(value);
      });
      //增加sroll监听
      window.addEventListener('scroll', this.refreshRecommends);
    },
    mounted: function () {


    },
    beforeDestroy: function () {
      this.$root.Bus.$off('changeRecommend');
      this.initAllParam();

    },
    methods: {
      initAllParam: function () {
        this.bottomFlag = false;
        this.recommendIndex = 0;
        this.firstStep = 0;
      },
      changeRecommends: function (value) {
        this.arrFlag = value;
        if (0 == value) {
          this.recommendArr = this.boomArr.slice(0, 3);
          this.initAllParam();
          this.recommendIndex += 1;

        } else if (1 == value) {
          this.recommendArr = this.freeDataArr.slice(0, 3);
          this.initAllParam();
          this.recommendIndex += 1;
        } else {
          this.recommendArr = this.pointDataArr.slice(0, 3);
          this.initAllParam();
          this.recommendIndex += 1;
        }
      },
      algorithmRecommends: function () {
        console.log(this.arrFlag);
        let tmpArr = [];
        if (0 == this.arrFlag) {
          tmpArr = this.boomArr;
        } else if (1 == this.arrFlag) {
          tmpArr = this.freeDataArr;
        } else if (2 == this.arrFlag) {
          tmpArr = this.pointDataArr;
        } else {
          tmpArr = this.retArr;
        }
        if ((this.recommendIndex + 1) * 3 < tmpArr.length) {
          this.recommendIndex += 1;
          this.recommendArr = tmpArr.slice(0, (this.recommendIndex) * 3);
        } else {
          this.recommendArr = tmpArr.slice(0, tmpArr.length);
          this.bottomFlag = true;
        }
      },
      refreshRecommends: function () {
        //获取屏幕信息
        let pageYOffset = window.pageYOffset;
        let bodyHeight = document.body.offsetHeight;
        let screenHeight = window.screen.height;
        this.firstStep = bodyHeight - screenHeight;

        console.log(pageYOffset);
        console.log("this.firstStep:" + this.firstStep);
        console.log("recommendIndex:" + this.recommendIndex);
        if ((pageYOffset >= this.firstStep) && !this.bottomFlag) {
          this.bottomFlag = false;
          setTimeout(this.algorithmRecommends, 3000);
        }

      }
    },
  }
</script>
