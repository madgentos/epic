<template>
  <q-page padding>
    <h4>Приступы</h4>
    {{fits}}
    <q-modal v-model="modalAddOpened" minimized>
      <div style="padding: 1em">
        <add-fit @Close="modalFitAddClose"></add-fit>
      </div>
    </q-modal>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        color="primary"
        @click="modalAddOpened = true"
        icon="add"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import AddFit from '../components/AddFit'
export default {
  name: 'fit',
  components: {AddFit},
  data () {
    return {
      e: '',
      modalAddOpened: false
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
    },
    modalFitAddClose () {
      this.modalAddOpened = false
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

<style scoped>
  .modal-close {
  }
</style>
