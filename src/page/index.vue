<template>
  <div>
    <scrollimg></scrollimg>
    <div class="bottom">
      <recommend></recommend>
    </div>
  </div>
</template>


<script>
import scrollimg from '../components/scrollimg'
import recommend from '../components/recommend'

export default {
  name: 'index',
  components: {
    scrollimg,
    recommend,
  }

}
</script>

