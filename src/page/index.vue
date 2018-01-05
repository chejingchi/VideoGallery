<template>
  <div>
    <topLayer></topLayer>
    <scrollimg></scrollimg>
    <div class="bottom">
      <hotActivity></hotActivity>
      <secondRecommend></secondRecommend>
    </div>
    <bottom></bottom>
  </div>
</template>


<script>
import scrollimg from '../components/scrollimg'
import recommend from '../components/recommend'
import topLayer from '../components/topLayer'
import hotActivity from '../components/hotActivity'
import secondRecommend from '../components/secondRecommend'
import bottom from "../components/bottom"

export default {
  name: 'index',
  components: {
    scrollimg,
    recommend,
    topLayer,
    hotActivity,
    secondRecommend,
    bottom
  }

}
</script>

