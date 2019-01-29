<template>
  <div>
    <q-icon name="album"></q-icon>
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

<style>
</style>
