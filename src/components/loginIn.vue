<template>
  <div class="tip-wrap" v-show="ordered" @click.self="ordered=false">
    <div class="tip-bg">
      <div class="border-wrap">
        <i class="icon-user"></i>
        <div class="logwrap">
          <i class="icon-phone"></i>
          <input type="number" class="ipt-phone" v-model="phone" placeholder="手机号码" pattern="[0-9]*" >
          <i class="icon-current" :class="{invisible:!isPhone}"></i>
        </div>
        <div class="logwrap">
          <i class="icon-verification"></i>
          <input type="number" class="ipt-verification" v-model="verification" placeholder="验证码" pattern="[0-9]*" >
          <i class="icon-current" :class="{invisible:!isVerification}"></i>
          <div class="getverification">
            <button class="" @click="getVerification" :disabled="!(isPhone&&spanverification == '获取验证码')">{{spanverification}}
              <em v-if="typeof(spanverification) == 'number'">s</em>
            </button>
          </div>
        </div>
        <div class="btns">
          <button class="btn-submit" id="login" :class="{unable: !(isVerification&&isPhone)}" @click="doLogin()" :disabled="!(isVerification&&isPhone)">登录</button>
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
import Bus from "../util/bus";
import request from "../service";
import { getCookie, setCookie, deleteCookie } from "../util/cookies";
import load from "./load";
import modal from "../components/modal";

export default {
  data() {
    return {
      ordered: false,
      verification: "",
      phone: "",
      spanverification: "获取验证码",
      isVerification: false,
      isPhone: false,
      marked: false,
    };
  },
  components: {
    load,
    modal,
  },
  methods: {
    doLogout() {
      this.ordered = true;
    },
    getVerification() {
      var timer = setTimeout(this.getVerification, 1000);
      if (this.spanverification == "获取验证码") {
        this.spanverification = 60;
        let params = {
          mobile: this.phone,
          delegate: '1000001'
        };
        request(`/login/captcha`, params, "post").then(data => {
        }).catch(err=>{
            this.$refs.modalMethod.getMessage(err.data.errorMessage);
            let self = this;
            this.marked = false;
            setTimeout(function() {
              self.ordered = false;
            }, 2000);
        });
      } else {
        if (this.spanverification == 0) {
          clearTimeout(timer);
          this.spanverification = "获取验证码";
        } else {
          this.spanverification--;
        }
      }
    },
    doLogin(e) {
      this.marked = true;
      if (this.isVerification && this.isPhone === true) {
        let params = {
          mobile: this.phone,
          captcha: this.verification,
          delegate: '1000001',
        };
        request(`/login`, params, "post")
          .then(data => {
            console.log(data);
            setCookie("logintoken", data.token, 1);
            this.ordered = false;
            Bus.$emit("getTarget", this.ordered);
            this.marked = false;
            this.$router.go(0);
          })
          .catch(err => {
            let errMsg = ''
            if (err.status !== 401) {
              errMsg = '手机号或<br/>验证码错误'
            } else {
              errMsg = '鉴权失败'
              deleteCookie('logintoken')
              return this.$router.go(0);
            }
            this.$refs.modalMethod.getMessage(errMsg);
            let self = this;
            this.marked = false;
            setTimeout(function() {
              self.ordered = false;
            }, 2000);
            this.verification = "";
          });
      }

    }
  },
  watch: {
    verification(e) {
      const reg = /^\d{6}$/;
      this.isVerification = reg.test(e);
    },
    phone(e) {
      const reg = /^1[34578]\d{9}$/;
      this.isPhone = reg.test(e);
    }
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
  background-color: rgba(20, 20, 20, 0.7);
  // filter: blur(20px);
}

.tap-top {
  position: absolute;
  display: flex;
  z-index: 9;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(20, 20, 20, 0.7);
  // filter: blur(20px);
}

.invisible {
  visibility: hidden !important;
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
      height: 10vw;
      margin-bottom: 2vh;
      font-size: 4vw;
      line-height: 11vw;
      border-radius: 5vw;
      border: none;
      outline: none;
    }
    .btn-submit {
      color: #fff;
      margin: 6vh 0;
      background-color: red;
      &.unable {
        color: #3956a6;
        background-color: #fff;
      }
    }
    .btn-cancel {
    }
  }
}

.icon-user {
  display: inline-block;
  width: 10vw;
  height: 10vw;
  margin: 3vh 0 2vh;
  background-size: cover;
  background-image: url(../assets/icon-user.png);
}

.icon-verification {
  display: inline-block;
  width: 5vw;
  height: 5vw; // margin: 3vh 0 2vh;
  background-size: cover;
  background-image: url(../assets/icon-captache.png);
}

.icon-phone {
  display: inline-block;
  width: 5vw;
  height: 5vw; // margin: 3vh 0 2vh;
  background-size: cover;
  background-image: url(../assets/icon-phone.png);
}

.icon-current {
  display: inline-block;
  width: 5vw;
  height: 5vw; // margin: 3vh 0 2vh;
  background-size: cover;
  background-image: url(../assets/icon-current.png);
}

.logwrap {
  display: flex;
  height: 7vw;
  font-size: 3.5vw;
  color: #fff;
  line-height: 5vw;
  border-bottom: 1px solid white;
  margin: 3vh 4vw 0;
  padding: 0 2vw;
  input {
    background: transparent;
    width: 35vw;
    height: 5vw;
    margin: 0 2vw;
    padding-top: 0.5vw;
    line-height: 5vw;
    font-size: 3.5vw;
    border: none;
    outline: none;
    color: white;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #fff;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #fff;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #fff;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #fff;
    }
    &.ipt-verification {
      width: 14vw;
      margin-right: 0vw;
    }
  }
  .getverification {
    height: 5vw;
    width: 18vw;
    padding-left: 2vw;
    margin-left: 2vw;
    border-left: 1px solid white;
    button {
      outline: none;
      border: none;
      font-size: 3.2vw;
      background: transparent;
      color: #3956a6;
    }
  }
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
