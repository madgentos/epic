<template>
  <q-page padding>
    <h4>Приступы</h4>
    Количество {{fits.length}}
    Yearpool {{Yearpool}}
    <div class="row">
      <q-select
        v-model="selectedYear"
        float-label="Год"
        radio
        :options="Yearpool"
        class="col-6"
      />
      <q-select
        v-model="selectedMonth"
        float-label="Месяц"
        radio
        :options="genMonth"
        class="col-6"
      />
    </div>
    <ol>
      <li v-for="item in this.fits" :key="item.id">
        <Fit :fit="item"></Fit>
      </li>
    </ol>
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
import {DefMonth, DefYear, GenPoolYear} from '../utils/GenDefVal'
import AddFit from '../components/AddFit'
import Fit from '../components/Fit'
export default {
  name: 'fits',
  components: {AddFit, Fit},
  data () {
    return {
      e: '',
      modalAddOpened: false,
      selectedMonth: Number(DefMonth()),
      selectedYear: Number(DefYear())
    }
  },
  computed: {
    fits () {
      return this.$store.getters['fit/FITS']
    },
    genMonth () {
      let arr = []
      for (let i = 0; i <= 11; i++) {
        let d = new Date()
        let o = {
          value: i + 1,
          label: this.$moment(d).month(i).format('MMMM')
        }
        arr.push(o)
      }
      return arr
    },
    Yearpool () {
      return GenPoolYear()
    },
    dayInMouth () {
      return this.$moment(`${this.selectedYear}-${this.selectedMonth}`, 'YYYY-MM').daysInMonth()
    }
  },
  methods: {
    GetFit () {
      this.$store.dispatch('fit/GET_FITS', {Month: this.selectedMonth, Year: this.selectedYear})
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
  },
  watch: {
    selectedMonth: function () {
      this.StopFits()
      this.$store.dispatch('fit/GET_FITS', {Month: this.selectedMonth, Year: this.selectedYear})
    },
    selectedYear: function () {
      this.StopFits()
      this.$store.dispatch('fit/GET_FITS', {Month: this.selectedMonth, Year: this.selectedYear})
    }
  }
}
</script>

<style scoped>
</style>
