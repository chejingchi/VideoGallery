<template>
    <div>
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
        recommendArr: [
          {
            src : require("../assets/banner1.jpg"),
            subject : "畅世在手，追剧无忧",
            time : "2017年12月1日-2018年12月31日",
            range : "全国",
            object : "全国"
          },
          {
            src : require("../assets/banner1.jpg"),
            subject : "沃视频，重新定义你的世界",
            time : "2017年12月1日-2018年12月31日",
            range : "全国",
            object : "全国"
          },
          {
            src : require("../assets/banner1.jpg"),
            subject : "冰激凌用户享英超观影特权",
            time : "2017年12月1日-2018年12月31日",
            range : "全国",
            object : "全国"
          },
          {
            src : require("../assets/banner1.jpg"),
            subject : "冰激凌用户享30天腾讯VIP会员",
            time : "2017年12月1日-2018年12月31日",
            range : "全国",
            object : "全国"
          },
        ]
      }
    }
  }
</script>
