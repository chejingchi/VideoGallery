<template>
    <div>
        <div class="container">
            <div class="title margin-left-flag">
                <div class="hot-title">
                    <img src="../assets/hotActivity.png">
                </div>
                <div class="font-style" v-for="title in titleArr">
                    <a :href="title.src">{{title.name}}</a>
                </div>
                <div class="facing-right">
                    <div class="triangle-facing-right">
                    </div>
                    <div class="triangle-facing-right">
                    </div>
                </div>
            </div>
            <div class="divide margin-top-1"></div>
            <div class="picture margin-left-flag">
                <pictureActivity></pictureActivity>
            </div>
            <div class="divide"></div>

            <div class="divide-with-recommend"></div>
        </div>

    </div>
</template>
<style lang="less" scoped>
    .container {
        .margin-left-flag {
            margin-left: 4vw;
        }
        .title {
            display: flex;
            height: 5vh;
            .hot-title {
                img {
                    margin-top: 0.9vh;
                    height: 3vh;
                }
            }
            .font-style {
                line-height: 5vh;
                margin-left: 2vw;
                font-size: 1.8vh;
            }
            .facing-right {
                display: flex;
                margin-top: 1.7vh;
                margin-left: 0.5vw;
                .triangle-facing-right {
                    border-right: 2px solid;
                    border-bottom: 2px solid;
                    width: 1.2vh;
                    height: 1.2vh;
                    transform: rotate(-45deg);
                    color: #f08f3a;
                }
            }

            .picture {

            }
        }
        .divide {
            border-top: 1px solid #c8c9ca;
        }
        .margin-top-1{
            margin-top: 1vh;
        }
        .divide-with-recommend {
            background-image: url("../assets/divide-line.png");
            background-repeat: no-repeat;
            height: 2vh;
            background-size: 100% 100%;
            margin-top: 1.5vh;
        }
    }

</style>
<script>
  import pictureActivity from "../components/pictureActivity"

  export default {
    data () {
      return {
        titleArr: [
          {
            name: "免流量",
            src: ""
          },
          {
            name: "看视频",
            src: ""
          }
        ]
      }
    },
    components: {
      pictureActivity,
    },
    methods: {},


  }
</script>
