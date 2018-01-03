<template>
  <div class="rec-content">
    <!-- hot -->
    <div v-for="item in service" :key="item.title" class="recommend-module">
      <h4>
        <span>{{item.title}}</span>
      </h4>
      <div class="content-wrap">
        <div v-for=" (eitem,i) in item.content" :key="eitem.name" class="rec-item">
          <div v-if="eitem.productId">
            <div class="rec-name">
              <span class="name">{{eitem.name}}</span>
              <router-link tag="a" :to="{name: 'detail',query:{id:eitem.productId}}">
                <img class="rec-logo" :src="eitem.src"/>
              </router-link>
            </div>
          </div>
          <div v-else>
            <div class="rec-name">
              <span class="name">{{eitem.name}}</span>
              <a href="http://changshi.wo.cn">
                <img class="rec-logo" :src="eitem.src"/>
              </a>
            </div>
          </div>
          <div class="rec-price">
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-module">
      <div class="bar-wrap lf-bar">
        <div class="bar "></div>
        <i style="border-radius: 100px / 50px"></i>
      </div>
      <div class="bar-wrap rt-bar">
        <div class="bar "></div>
        <i style="border-radius: 100px / 50px"></i>
      </div>
      <h4>
        <span>{{vedio.title}}</span>
      </h4>
      <div class="vedio">
        <div class="vedio-top"></div>
        <div class="vedio-content">
          <div class="vedio-detail" v-for="item in vedio.program" :key="item.name">
            <div class="vedio-wrap">
              <a :href="item.link">
                <img :src="item.src" alt="">
              </a>
            </div>
            <div class="vedio-name">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import product from "../util/product";

export default {
  data() {
    return {
      service: [
        {
          title: "爆款热推",
          content: product.slice(0, 4)
        },
        {
          title: "超值定向流量",
          content: product.slice(4)
        }
      ],
      vedio: {
        title: "免流量看大片",
        program: [
          {
            name: "急诊科医生",
            link: "http://wotvnews.17wo.cn/wovideo/videoMap/init?set_id1=h5-1",
            src: require("../assets/bottom2.png")
          },
          {
            name: "莫名被金毛鄙视一早上",
            link: "http://wotvnews.17wo.cn/wovideo/videoMap/init?set_id1=h5-6",
            src: require("../assets/bottom1.png")
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>

.rec-content {
  position: relative;
  z-index: 4;
  top: -1.7vh;
  padding-bottom: 7vw;
  overflow: hidden;
  & :first-child.recommend-module {
    margin-top: 0vh;
    h4 {
      background-image: url(../assets/titlebannerbg.png);
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 0 1.5vh;
    }
  }
}

.bar-wrap {
  position: absolute;
  bottom: 37vw;
  .bar {
    position: absolute;
    width: 2vw;
    bottom: 0;
    height: 100vw;
    z-index: 2;
    background-image: url(../assets/bar-bg.png);
    background-size: 100% 100%;
  }
  &.lf-bar {
    left: 34vw;
  }
  &.rt-bar {
    right: 34vw;
  }
  i {
    position: absolute;
    left: 34vw;
    display: block;
    z-index: 1;
    left: -0.45vw;
    content: "";
    width: 3vw;
    height: 1.5vw;
    bottom: -0.1vw;
    background: #0a1c4b;
  }
}


.content-wrap {
  position: relative;
  z-index: 10;
  display: flex;
  padding-bottom: 3vw;
  background-image: url(../assets/bannerbg.png);
  background-size: 100%;
  background-position: 0 11vw;
  background-repeat: no-repeat;
  .rec-item {
    width: 21vw;
    margin-left: 3.5vw;
    .rec-name {
      // font-size: .9rem;
      width: 19vw;
      padding-right: 2vw;
      height: 23.5vw;
      color: #fff;
      background-image: url(../assets/recommendbg.png);
      background-size: cover;
      background-repeat: no-repeat;
      & > a {
        display: inline-block;
        height: 14vw;
        width: 14vw;
        margin-top: 3vw;
        border-radius: 3vw;
        animation-fill-mode: forwards;
      }
      .name {
        display: block;
        height: 3.5vw;
        font-size: 2.5vw;
        line-height: 3.5vw;
        animation-fill-mode: forwards;
      }
      .rec-logo {
        height: 14vw;
        width: 14vw;
        border-radius: 3vw;
        box-shadow: 0 2px 6px rgba(4, 0, 0, 0.46);
      }
    }
    .rec-price {
      color: #fff100;
      width: 19vw;
      height: 3.5vw;
      line-height: 3.5vw;
      font-size: 3.2vw;
      background-image: url(../assets/036.png);
      background-size: 19vw 100%;
      background-repeat: no-repeat;
    }
  }
}

.recommend-module {
  position: relative;
  margin-top: 2vh;
  h4 {
    position: relative;
    z-index: 5;
    margin-bottom: 2vh;
    width: 100vw;
    color: #fff100;
    letter-spacing: 0.1rem;
    font-size: 3vw;
    margin-top: 0.1rem;
    font-weight: normal;
    span {
      position: relative;
      display: inline-block;
      width: 40vw;
      height: 7.7vw;
      margin: 0 auto;
      line-height: 9vw;
      background-image: url(../assets/titlebg.png);
      background-size: 100%;
      &:after {
        display: block;
        content: "";
        position: absolute;
        width: 0vw;
        height: 0vw;
        right: 2vw;
        top: 2.2vw;
        border-left: 2.5vw solid #fff100;
        border-top: 2vw solid transparent;
        border-bottom: 2vw solid transparent;
      }
    }
  }
}

.vedio {
  width: 90vw;
  margin: 0 5vw;
}

.vedio-top {
  width: 90vw;
  height: 3vw;
  background-image: url(../assets/topbar.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.vedio-content {
  display: flex;
  width: 90vw;
  height: 35vw;
  background: #5b79cd;
  border-radius: 5px;
  .vedio-detail {
    flex: 1;
    padding: 1vw;
    .vedio-wrap {
      width: 41vw;
      padding: 1vw;
      background-color: #3a57a6;
      border-radius: 1vw;
      box-shadow: 0 -1px 1px rgba(4, 0, 0, 0.46);
      a {
        display: block;
        width: 41vw;
        height: 25vw;
      }
      img {
        width: 41vw;
        height: 25vw;
      }
    }
    .vedio-name {
      height: 5vw;
      margin-top: 1vw;
      line-height: 5vw;
      color: #fff100;
      font-size: 3vw;
      letter-spacing: 0.2rem;
      border-radius: 1vw;
      background-color: #85a3f0;
    }
  }
}
</style>
