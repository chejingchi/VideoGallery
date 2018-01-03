<template>
  <div id="app" ref="app">
    <!-- <transition :name="transitionName" mode="in-out"> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    // $route(to, from) {
    //   var u = navigator.userAgent;
    //   var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //   console.log("asd:" + isiOS);
    //   if (!isiOS) {
    //     console.log("前一页 from = " + from.query.id);
    //     console.log("准备进入的页面是  to = " + to.query.id);
    //     if (to.query.id !== undefined) {
    //       this.transitionName = "fade";
    //     } else {
    //       this.transitionName = "slide-left";
    //     }
    //   } else {
    //     if (to.query.id !== undefined) {
    //       this.transitionName = "fade";
    //     } else {
    //       this.transitionName = "";
    //     }
    //   }
    // }
  },
  methods: {
    NoiOS() {
      var u = navigator.userAgent;
      // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      return isiOS;
    }
  },
  mounted() {
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bottom {
  flex: 1;
  background-image: url("assets/021.jpg");
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
// .child-view {
//   position: absolute;
//   transition: all .4s cubic-bezier(.55,0,.1,1);
// }

.slide-left-enter-actice,
.slide-left-leave-active {
  transition: all 0.25s ease;
  transform: translateX(0);
  opacity: 1;
}

.slide-left-enter,
.slide-left-leave-active {
  transform: translateX(10%);
  opacity: 0;
}

// .slide-left-leave-active, .slide-right-enter-active {
//   -webkit-transform: translateX(-100%, 0);
//   transform: translateX(-100%, 0);
//   transition: all 1s ease;
// }
</style>
