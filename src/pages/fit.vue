<template>
  <q-page padding>
    <h4>Приступы</h4>
    {{fits}}
    <add-fit></add-fit>
  </q-page>
</template>

<script>
import AddFit from '../components/AddFit'
export default {
  name: 'fit',
  components: {AddFit},
  data () {
    return {
      e: ''
    }
  },
  computed: {
    fits () {
      return this.$store.getters['fit/FITS']
    }
  },
  methods: {
    GetFit () {
      this.$store.dispatch('fit/GET_FITS')
    },
    StopFits () {
      this.$store.dispatch('fit/STOP_FITS')
    }
  },
  created () {
  },
  mounted () {
    this.GetFit()
  },
  beforeDestroy () {
    this.StopFits()
  }
}
</script>

<style>
</style>
