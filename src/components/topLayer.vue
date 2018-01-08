<template>
    <div>
        <div class="top-layer-container">
            <div class="left-title">
            </div>
            <div class="title-container">
                <div class="titles">
                    <div class="choose-type">选择类型</div>
                    <div @click="chooseRecommend(0)" :class="{choose : chooseFlag == 0}">爆款热推</div>
                    <div class="data-usage" @click="chooseRecommend(2)" :class="{choose : chooseFlag == 2}">超值定向流量</div>
                    <div class="watch-movie" @click="chooseRecommend(1)" :class="{choose : chooseFlag == 1}">免流看大片</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    body {
        background-color: #ff0000;
    }

    .top-layer-container {
        display: flex;
        .left-title {
            background-image: url(../assets/left-title.png);
            width: 23vw;
            height: 9vh;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .title-container {
            margin-left: 2vw;
            .titles {
                margin-top: 2.3vh;
                line-height: 5vh;
                height: 4.7vh;
                border: 0.5px solid #f08f3a;
                border-radius: 8px;
                display: flex;
                .choose-type {
                    background-color: #f08f3a;
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                    color: white;
                    font-weight: 900;
                    font-size: 1.4rem;
                }
                .choose {
                    color: red;
                }
                .watch-movie {
                    width:19vw;
                }
                .data-usage {
                    width:20vw;
                }
                div {
                    width: 17vw;
                }
                display: flex;
            }
        }
    }

</style>
<script>

  export default {
    data () {
      return {
        chooseFlag: "-1"
      }
    },
    methods: {
      chooseRecommend : function (param) {
        this.$root.Bus.$emit('changeRecommend',param);
        this.chooseFlag = param;
      }
    }
  }
</script>
