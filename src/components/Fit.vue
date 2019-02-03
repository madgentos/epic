<template>
  <div class="cl-fit">
    <!--<q-icon name="album"></q-icon>-->
    <div :class="fit.fitStrength" class="f"></div>
    <!--<q-icon name="fas in-cons"/>-->
  </div>
</template>

<script>
export default {
  props: {
    fit: Object
  },
  name: 'Fit',
  data () {
    return {}
  },
  computed: {
    date () {
      let date = this.fit.date
      return this.$moment(date).format('MMMM')
    },
    Strength () {
      return {
        Micro: 'Микро',
        Weak: 'Слабый',
        Average: 'Средний',
        Strong: 'Сильный'
      }
    }
  }
}
</script>

<style scoped>
  .f {
    width: inherit;
    height: inherit;
  }
  .cl-fit {
    width: 15px;
    height: 15px;
    margin: 2px;
  }
</style>
