<template>
    <div>
        <div class="container">
            <div class="title margin-left-flag">
                <div class="hot-title">
                    <img src="../assets/hotActivity.png">
                </div>
                <div class="font-style" id="wrapper">
                    <div class="inner">
                        <a :href="title.src">{{title.name}}</a>
                    </div>
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
                width: 70vw;
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                .inner {
                    width: 1000px;
                    overflow: hidden;
                    a {
                        display: inline-block;
                    }
                }
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
        .margin-top-1 {
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
        title: {
          name: "免流量啊大法师打发斯蒂芬撒旦法撒旦法撒旦法撒旦法是的撒的飞洒",
          src: "http://changshi.wo.cn"
        },
        wrapper: {},
        inner: {},
        p_w: 0,
        wrapper_w: 0,

      }
    },
    components: {
      pictureActivity,
    },
    methods: {
      leftScroll: function (scrollObj) {
        let tmp = scrollObj.scrollLeft++;
//        console.log("scrollObj.scrollLeft :" + scrollObj.scrollLeft);
//        console.log("tmp :" + tmp);
        if (scrollObj.scrollLeft == tmp) {
          scrollObj.innerHTML += scrollObj.innerHTML;
        }
        if (scrollObj.scrollLeft >= scrollObj.firstChild.firstChild.offsetWidth) {
          scrollObj.scrollLeft = 0;
        }

      },
    },
    mounted: function () {
      let scrollObj = document.getElementById("wrapper");
      let that = this;
      setInterval(() => {
        that.leftScroll(scrollObj);
      }, 50);
    }


  }
</script>
