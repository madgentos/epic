<template>
  <q-page padding>
    <h4>Приступы</h4>
    <div class="row">
      <q-select
        v-model="selectedDate.selectedYear"
        float-label="Год"
        radio
        :options="Yearpool"
        class="col-6"
      />
      <q-select
        v-model="selectedDate.selectedMonth"
        float-label="Месяц"
        radio
        :options="genMonth"
        class="col-6"
      />
    </div>
    Количество {{fits.length}}
    <table>
      <tr>
        <th v-for="(item, index) in timeHeader" :key="index">
          {{item.hour}}
        </th>
      </tr>
      <tr v-for="(item, index) in fitsInTable" :key="index">
        <th>{{item.date}}</th>
        <td class="td" v-for="(times, index) in item.hours" :key="index">
          <div v-if="times.fits" v-for="(f, index) in times.fits" class="td-fit" :key="index">
             <Fit :fit="f"></Fit>
          </div>
        </td>
      </tr>
    </table>
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
import {DefMonth, DefYear, GenPoolYear, tablefits} from '../utils/GenDefVal'
import AddFit from '../components/AddFit'
import Fit from '../components/Fit'
export default {
  name: 'fits',
  components: {AddFit, Fit},
  data () {
    return {
      e: '',
      modalAddOpened: false,
      selectedDate: {
        selectedMonth: Number(DefMonth()),
        selectedYear: Number(DefYear())
      },
      table: []
    }
  },
  computed: {
    fits () {
      return this.$store.getters['fit/FITS']
    },
    fitsInTable () {
      return tablefits(this.$store.getters['fit/FITS'], this.dayInMouth)
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
      return this.$moment(`${this.selectedDate.selectedYear}-${this.selectedDate.selectedMonth}`, 'YYYY-MM').daysInMonth()
    },
    timeHeader () {
      let ob = []
      let ob01 = ob.concat(this.fitsInTable[0].hours)
      let ob2 = {}
      ob2.time = ''
      ob01.unshift(ob2)
      return ob01
    }
  },
  methods: {
    GetFits () {
      this.$store.dispatch('fit/GET_FITS', {Month: this.selectedDate.selectedMonth, Year: this.selectedDate.selectedYear})
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
    this.GetFits()
  },
  beforeDestroy () {
    this.StopFits()
  },
  watch: {
    selectedDate: {
      handler: function () {
        this.StopFits()
        this.GetFits()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .td{
    border: solid 1px #000;
    width: 20px;
    height: 20px;
  }
</style>
