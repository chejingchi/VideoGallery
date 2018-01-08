<template>
    <div @scroll="refreshRecommends">
        <div class="container" v-for="recommend in recommendArr">
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
                <div class="understand-details-btn">
                    <img src="../assets/understand-details.png">
                </div>
            </div>
            <div class="circle-divide">
            </div>
        </div>
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
                    margin-top: 2vh;
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
  export default {
    data () {
      return {
        recommendArr: [],
        boomArr: [
          {
            src: require("../assets/banner1.jpg"),
            subject: "无限畅视",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "英超观赛券",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "Bestv App包天",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "Bestv App包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "攀登读书会课程",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "小顾聊绘画课程",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "简七理财课程",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "WO+视频PPTV定向流量包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
        ],
        freeDataArr: [
          {
            src: require("../assets/banner1.jpg"),
            subject: "沃视频电视栏目",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "沃视频爱看栏目",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          }
        ],
        pointDataArr: [
          {
            src: require("../assets/banner1.jpg"),
            subject: "WO+视频腾讯定向流量包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "WO+视频优酷定向流量包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "WO+视频乐视定向流量包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "Bestv App包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          },
          {
            src: require("../assets/banner1.jpg"),
            subject: "WO+视频芒果TV定向流量包月",
            time: "2017年12月1日-2018年12月31日",
            range: "全国",
            object: "全国"
          }
        ]
      }
    },
    created: function () {
      //设置推荐位置初始化
      var retArr = this.boomArr.concat(this.freeDataArr);
      retArr = retArr.concat(this.pointDataArr);
      this.recommendArr = retArr.slice(0, 3);
      //监听事件
      this.$root.Bus.$on("changeRecommend", value => {
        this.changeRecommends(value);
      })
    },
    methods: {
      changeRecommends: function (value) {
        if (0 == value) {
          this.recommendArr = this.boomArr;

        } else if (1 == value) {
          this.recommendArr = this.freeDataArr;
        } else {
          this.recommendArr = this.pointDataArr;
        }
      },
      refreshRecommends: function () {
        alert(111);
      }
    }
  }
</script>
