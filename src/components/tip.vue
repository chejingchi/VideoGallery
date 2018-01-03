<template>
  <div class="tip-wrap" v-show="ordered" @click.self="ordered=false">
    <div class="tip-bg">
      <div class="border-wrap">
        <i class="icon-warn"></i>
        <p class="info">尊敬的用户,您将{{!cancel?'订购':'退订'}}业务{{product.name}}，资费为{{product.price}}{{!cancel?'，业务自订购成功之日起30天内有效。确认订购请点击“确定”按钮。':'。'}}</p>
        <div class="btns">
          <button class="btn-submit" @click="submitOrder(true)">确定</button>
          <button class="btn-cancel" @click="submitOrder(false)">取消</button>
        </div>
      </div>
    </div>

    <div class="tap-top" v-if="marked">
      <!-- Loading -->
      <load></load>
    </div>
    <modal ref="modalMethod"></modal>
  </div>
</template>

<script>
import Bus from "../util/bus.js";
import request from "../service";
import { getCookie, setCookie } from "../util/cookies";
import product from "../util/product";
import load from './load';
import modal from "../components/modal"


export default {
  data() {
    return {
      ordered: false,
      products: {},
      cancel: false,
      marked: false,
    };
  },
  components: {
    load,
    modal,
  },
  methods: {
    show (cancel) {
      console.log(cancel);
      this.cancel = cancel
      this.ordered =true;
    },
    submitOrder(method) {
      if(method) {
        this.marked = true;
        let header = getCookie("logintoken");
        console.log(`method:${method}`)
        if (!this.cancel) {
          request(`/products/${this.product.productId}`, undefined, 'post', header).then(data => {
            this.marked = false;
            Bus.$emit("getTarget", true);
            this.ordered = false;
          }).catch(err=>{
            console.log('123123'+err);
            if (err.data.errorCode == '300002') {
              this.$refs.modalMethod.getMessage(err.data.errorMessage);
            } else {
              this.$refs.modalMethod.getMessage('订购受理失败，<br/>请稍后再试。');
            }
            let self = this;
            this.marked = false;
            setTimeout(function() {
              self.ordered = false;
            }, 2000);
            Bus.$emit("getTarget", false);
          });
        } else {
          request(`/products/${this.product.productId}`, undefined, 'delete', header).then(data => {
            Bus.$emit("getTarget", true);
            this.marked = false;
            this.ordered = false;
          }).catch(err=>{
            console.log(err);
            if (err.data.errorCode == '300002') {
              this.$refs.modalMethod.getMessage(err.data.errorMessage);
            } else {
              this.$refs.modalMethod.getMessage('退订受理失败，<br/>请稍后再试。');
            }
            let self = this;
            this.marked = false;
            setTimeout(function() {
              self.ordered = false;
            }, 2000);
            Bus.$emit("getTarget", false);
          });
        }
      } else {
        this.ordered = false;
      }


    }
  },
  created() {

    this.product = product.filter(e => {
      return e.productId == this.$route.query.id;
    })[0];
  },
  mounted () {

  }
};
</script>

<style lang="less" scoped>
.tip-wrap {
  position: absolute;
  display: flex;
  z-index: 9;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(20, 20, 20, 0.7); // filter: blur(20px);
}

.tip-bg {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -31vw;
  transform: translateY(-50%);
  background-color: #5d7fd7;
  border-radius: 10px; // box-shadow: 0px -10px 10px rgba(57, 86, 166, .75);
}

.border-wrap {
  margin: 2vw;
  width: 60vw;
  border-radius: 10px;
  background-color: #85a3f0;
  box-shadow: 0 0 3px rgba(0, 0, 4, 0.75);
  .info {
    width: 50vw;
    max-height: 18vh;
    margin: 0 5vw;
    color: #fff;
    font-size: 4vw;
    text-align: left;
    word-break: break-all;
    overflow: auto;
  }
  .btns {
    & > button {
      display: inline-block;
      width: 50vw;
      height: 6vh;
      margin-bottom: 2vh;
      font-size: 2.5vh;
      line-height: 6vh;
      border-radius: 3vh;
      border: none;
      outline: none;
    }
    .btn-submit {
      color: #fff;
      margin-top: 2vh;
      background-color: red;
    }
    .btn-cancel {
      color: #3956a6;
      background-color: #fff;
    }
  }
}

.icon-warn {
  display: inline-block;
  width: 10vw;
  height: 10vw;
  margin: 3vh 0 2vh;
  background-size: cover;
  background-image: url(../assets/warn.png);
}

.tap-top {
  position: absolute;
  display: flex;
  z-index: 9;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(20, 20, 20, 0.5); // filter: blur(20px);
}

.loadEffect {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}
.loadEffect span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.3);
    opacity: 0.5;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -10px;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 14px;
  top: 14px;
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -10px;
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 14px;
  right: 14px;
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -10px;
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 14px;
  bottom: 14px;
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -10px;
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 14px;
  left: 14px;
  -webkit-animation-delay: 1.04s;
}
</style>
