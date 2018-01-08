<template>
  <div class="scroll">
    <ul class="img-scroll">
      <v-touch tag="li" v-for="(v, i) in imgArray" :key="i" :class="{active: mark === i}" @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
        <a :href=" v.link ">
          <img :src=" v.src ">
        </a>
      </v-touch>
    </ul>
    <div class="dot">
      <div v-for="(v, i) in imgArray " :key="i" :class="{active: mark === i}"></div>
    </div>
    <div class="triangle">
      <div class="triangle-left" @click="onSwipeRight">
      </div>
      <div class="triangle-right" @click="onSwipeLeft">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mark: 0,
      imgArray: [
        {
          src: require('../assets/banner1.jpg'),
          link: 'http://changshi.wo.cn',
        },
        {
          src: require('../assets/banner2.jpg'),
          link: 'http://wotvnews.17wo.cn/wovideo/videoMap/init?set_id1=h5-1',
        },
        {
          src: require('../assets/banner2.jpg'),
          link: 'http://t.10155.com/0So',
        },

      ],
    }
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === this.imgArray.length) { //
        this.mark = 0;
      }
    },
    play() {
      var timer = setInterval(this.autoPlay, 500000000);
    },
    change(i) {
      this.mark = i;
    },
    onSwipeLeft() {
      console.log(this.mark);
      if (this.mark === this.imgArray.length-1) {
        this.mark = 0;
      } else {
        this.mark++;
      }
      console.log(this.mark);
    },
    onSwipeRight() {
      console.log(this.mark);

      if (this.mark === 0) {
        this.mark = this.imgArray.length-1;
      } else {
        this.mark--;
      }
      console.log(this.mark);
    }
  },
  created() {
    this.play();
  }
}
</script>

<style lang="less" scoped>

.img-scroll {
  position: relative;
  z-index: 4;
  width: 100vw;
  height: 49vw;
  display: flex;
  background-color: #fff;
  li {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 1s linear;
  }
  a {
    display: block;
    width: 100vw;
    height: 49vw;
  }
  img {
    width: 100vw;
    height: 49vw;
  }
  .active {
    opacity: 1;
    z-index: 9 ;
  }
}

.scroll {
  position: relative;
}

.dot {
  margin-top: 1vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  div {
    width: 2vw;
    height: 2vw;
    margin: 1vw;
    border-radius: 50%;
    border: 1px solid #f08f3a;
    &.active {
      background-color: #f08f3a;
    }
  }
}
  .triangle {
    .triangle-left {
      border-right: 4px solid;
      border-bottom: 4px solid;
      width: 3.2vh;
      height: 3.2vh;
      transform: rotate(135deg);
      color: #edfdff;
      position: absolute;
      margin-top: -15vh;
      z-index: 4;
      margin-left: 3vw;
    }
    .triangle-right {
      border-right: 4px solid;
      border-bottom: 4px solid;
      width: 3.2vh;
      height: 3.2vh;
      transform: rotate(-45deg);
      color: #edfdff;
      position: absolute;
      margin-top: -15vh;
      z-index: 4;
      margin-left: 90vw;
    }
  }
</style>
