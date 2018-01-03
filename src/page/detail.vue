<template>
  <div class="app">
    <div class="top">
      <h3>{{product.name}}定向流量包月SP</h3>
      <div class="content">
        <div class="rec-item">
          <div class="rec-name">
            <img class="rec-logo" :src="product.src" />
          </div>
          <div class="rec-price">
            <div>
              <span class="label">资费</span>
              <span>{{product.price}}</span>
              <span class="label">包含</span>
              <span>包{{product.price.slice(-1)}}</span>
            </div>
            <div>
              <span class="label">有效期</span>
              <span>1{{product.price.slice(-1)}}，默认自动续订</span>
            </div>
            <div>
              <span class="label">生效方式</span>
              <span>立即生效</span>
            </div>
          </div>
        </div>
        <div class="blue-bg">
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title" @click="delToken">
        <div>
          产品说明
        </div>
      </div>
      <p>
        “{{product.name}}定向流量包月/日”是针对联通用户推出的视频类流量包月/日产品。订购该产品，用户可免流量费观看{{product.name}}客户端内点播视频内容。
      </p>
      <div class="title">
        <div>
          温馨提示
        </div>
      </div>
      <p style="white-space: pre-wrap; margin-top: -20px">{{product.info}}</p>
    </div>
    <div class="btns">
      <div class="btns-wrap" >
        <div v-if="!ordered">
          <button class="normal" @click="goOrder" id="goOrder">
            订购
          </button>
        </div>
        <div v-else>
          <button class="warn" @click="cancelOrder" id="cancelOrder">
            退订
          </button>
        </div>
      </div>
    </div>
    <div>
      <tip ref="childMethod2"></tip>
      <logIn ref="childMethod"></logIn>
    </div>
  </div>
</template>

<script>
import request from "../service";
import Bus from "../util/bus";
import tip from "../components/tip";
import logIn from "../components/loginIn";
import { setCookie, getCookie, deleteCookie } from "../util/cookies";
import product from "../util/product";

export default {
  components: {
    tip,
    logIn,
  },
  data() {
    return {
      ordered: false,
      product: {}
    };
  },
  methods: {
    goOrder() {
      if (
        getCookie("logintoken") != "" &&
        getCookie("logintoken") != "undefined"
      ) {
        this.$refs.childMethod2.show();
      } else {
        this.$refs.childMethod.doLogout();
      }
    },
    cancelOrder() {

      this.$refs.childMethod2.show('cancel');

    },
    delToken() {
      alert(getCookie('logintoken'))
      deleteCookie('logintoken')
    },
    CheckRequest() {
      let header = getCookie("logintoken");
      if (header != "" && header != "undefined") {
        request(
          `/products/${this.product.productId}`,
          undefined,
          "get",
          header,
          true
        ).then((data) => {
          if (data.status == 200) {
            this.ordered = true;
          } else if (data.status == 204) {
            this.ordered = false;
          }
        }).catch((res)=>{
          console.log(res);
        });
      }
    }
  },
  created() {
    this.product = product.filter(e => {
      return e.productId == this.$route.query.id;
    })[0];
    Bus.$on("getTarget", (e, d) => {
      if(e) {
        this.ordered = !this.ordered;
      }
    });
  },
  mounted() {
    window.addEventListener("resize", this.handlerResize);
    this.CheckRequest();
  },
  activated() {
  },
  deactivated: function() {
    this.$destroy();
  }
};
</script>

<style lang="less" scoped>
.app {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}

.top {
  height: 30vh;
  h3 {
    height: 5vh;
    padding-top: 5vh;
    display: block;
    margin: 0 auto;
    width: 70%;
    color: #fff;
    font-size: 3vh;
    line-height: 5vh;
    border-radius: 1vh;
    background-color: #5d7fd7;
    overflow: hidden;
  }
  .content {
    position: relative;
    height: 18vh;
    padding-top: 2vh;
  }
  .blue-bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 5vh;
    bottom: 3vh;
    background-color: #5d7fd7;
    &:after {
      position: absolute;
      bottom: 0;
      display: block;
      content: "";
      width: 100%;
      height: 1vh;
      background-color: #85a3f0;
    }
  }
}
.rec-item {
  display: flex;
  position: relative;
  z-index: 3;
  margin: 0 10vw;
  justify-content: space-around;
  .rec-name {
    position: relative; // font-size: .9rem;
    font-size: 2vw;
    width: 11vh;
    padding-right: 2vh;
    padding-top: 1vh;
    height: 13vh;
    color: #fff;
    background-image: url(../assets/recbg.png);
    background-size: cover;
    background-repeat: no-repeat;
    .name {
      display: block;
      height: 3.5vw;
      line-height: 3.5vw;
    }
    .rec-logo {
      position: relative;
      display: block;
      left: 1.8vh;
      top: 1.5vh;
      height: 8vh;
      width: 8vh;
      border-radius: 1vw;
      animation-fill-mode:forwards;
      box-shadow: 0 2px 6px rgba(4, 0, 0, 0.46);
    }
  }
  .rec-price {
    width: 45vw;
    text-align: left;
    font-size: 1.5vh;
    & > div {
      margin-top: 0.7vh;
      color: #85a3f0;
    }
    .label {
      display: inline-block;
      color: #fff;
      height: 2.5vh;
      line-height: 2.5vh;
      padding: 0 2vw;
      margin-left: 2vw;
      border-radius: 2vw;
      background-color: #5d7fd7;
    }
  }
}

.bottom {
  // flex: 1;
  text-align: left;
  height: 60vh;
  color: #3e3a39;
  overflow: auto;
  background-image: none;
  .title {
    width: 30vw;
    text-align: center;
    padding: 0.5vh 0.5vh 0.5vh 0;
    border-radius: 0 0.8vh 0.8vh 0;
    background-color: #5d7fd7;
    div {
      display: inline-block;
      width: 100%;
      height: 3.5vh;
      font-size: 2.2vh;
      line-height: 3.5vh;
      letter-spacing: 0.8vw;
      border-radius: 0 0.5vh 0.5vh 0;
      background-color: #85a3f0;
      color: #fff100;
    }
  }
  p {
    padding: 2vh 5vw;
    font-size: 2vh;
    line-height: 3vh;
    text-indent: 0;
    &:nth-of-type(1) {
      text-indent: 2vh;
    }
  }
}

.btns {
  height: 10vh;
  .btns-wrap {
    border-top: 1px solid #c9c9c9;
  }
  button {
    width: 70vw;
    height: 6vh;
    margin-top: 1.5vh;
    font-size: 3vh;
    color: #fff;
    border: none;
    border-radius: 1vh;
    outline: none;
    &.normal {
      background-color: #5d7fd7;
    }
    &.warn {
      background-color: #ed6c00;
    }
    &.unorder {
      width: 50vw;
    }
  }
}
</style>
