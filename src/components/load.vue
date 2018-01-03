<template>
  <!-- <div class="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div> -->

  <div class="loader">
    <div class="loader-inner pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #32aacc;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #64aacc;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #96aacc;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c8aacc;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #faaacc;
}
@-moz-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}


@-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }

  50% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }

  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); } }

@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }

  50% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }

  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); } }

@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); }

  50% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  100% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); }

  50% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  100% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7; }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }

@keyframes pacman-balls {
  75% {
    opacity: 0.7; }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }

.pacman {
  position: relative; }
  .pacman > div:nth-child(2) {
    -webkit-animation: pacman-balls 1s 0s infinite linear;
            animation: pacman-balls 1s 0s infinite linear; }
  .pacman > div:nth-child(3) {
    -webkit-animation: pacman-balls 1s 0.33s infinite linear;
            animation: pacman-balls 1s 0.33s infinite linear; }
  .pacman > div:nth-child(4) {
    -webkit-animation: pacman-balls 1s 0.66s infinite linear;
            animation: pacman-balls 1s 0.66s infinite linear; }
  .pacman > div:nth-child(5) {
    -webkit-animation: pacman-balls 1s 0.99s infinite linear;
            animation: pacman-balls 1s 0.99s infinite linear; }
  .pacman > div:first-of-type {
    width: 0px;
    height: 0px;
    border-right: 25px solid transparent;
    border-top: 25px solid #fff;
    border-left: 25px solid #fff;
    border-bottom: 25px solid #fff;
    border-radius: 25px;
    -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
            animation: rotate_pacman_half_up 0.5s 0s infinite; }
  .pacman > div:nth-child(2) {
    width: 0px;
    height: 0px;
    border-right: 25px solid transparent;
    border-top: 25px solid #fff;
    border-left: 25px solid #fff;
    border-bottom: 25px solid #fff;
    border-radius: 25px;
    -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
            animation: rotate_pacman_half_down 0.5s 0s infinite;
    margin-top: -50px; }
  .pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    width: 10px;
    height: 10px;
    position: absolute;
    -webkit-transform: translate(0, -6.25px);
        -ms-transform: translate(0, -6.25px);
            transform: translate(0, -6.25px);
    top: 25px;
    left: 100px; }

/* @-webkit-keyframes cube-transition {
  25% {
    -webkit-transform: translateX(50px) scale(0.5) rotate(-90deg);
            transform: translateX(50px) scale(0.5) rotate(-90deg); }

  50% {
    -webkit-transform: translate(50px, 50px) rotate(-180deg);
            transform: translate(50px, 50px) rotate(-180deg); }

  75% {
    -webkit-transform: translateY(50px) scale(0.5) rotate(-270deg);
            transform: translateY(50px) scale(0.5) rotate(-270deg); }

  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg); } }

@keyframes cube-transition {
  25% {
    -webkit-transform: translateX(50px) scale(0.5) rotate(-90deg);
            transform: translateX(50px) scale(0.5) rotate(-90deg); }

  50% {
    -webkit-transform: translate(50px, 50px) rotate(-180deg);
            transform: translate(50px, 50px) rotate(-180deg); }

  75% {
    -webkit-transform: translateY(50px) scale(0.5) rotate(-270deg);
            transform: translateY(50px) scale(0.5) rotate(-270deg); }

  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg); } }

.cube-transition {
  position: relative;
  -webkit-transform: translate(-25px, -25px);
      -ms-transform: translate(-25px, -25px);
          transform: translate(-25px, -25px); }
  .cube-transition > div {
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    -webkit-animation: cube-transition 1.6s 0s infinite ease-in-out;
            animation: cube-transition 1.6s 0s infinite ease-in-out; }
    .cube-transition > div:last-child {
      -webkit-animation-delay: -0.8s;
              animation-delay: -0.8s; } */
</style>
