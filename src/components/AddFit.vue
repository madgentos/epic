<template>
  <div class="fit-com">
    <div style="text-align: center">Добавить приступ</div>
    <q-datetime v-model="date" type="datetime" :max="dateNow" format="D MMM YYYY - H:mm" />
    <q-select
      v-model="fitStrength"
      float-label="Сила приступа"
      :options="fitStrengthListOptions"
    />
    <div class="footer">
      <q-btn icon="power_settings_new" color="positive" label="Добавить" @click="AddFit"/>
      <q-btn icon="power_settings_new" color="negative" label="Закрыть" @click="Close"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddFit',
  data () {
    return {
      date: new Date(),
      dateNow: new Date(),
      fitStrength: 'Weak',
      fitStrengthListOptions: [
        {
          label: 'Микро',
          icon: 'mood',
          leftColor: 'positive',
          value: 'Micro'
        },
        {
          label: 'Слабый',
          icon: 'sentiment_dissatisfied',
          leftColor: 'info',
          value: 'Weak'
        },
        {
          label: 'Средний',
          icon: 'sentiment_very_dissatisfied',
          leftColor: 'warning',
          value: 'Average'
        },
        {
          label: 'Сильный',
          icon: 'mood_bad',
          leftColor: 'negative',
          value: 'Strong'
        }
      ]
    }
  },
  methods: {
    AddFit () {
      this.$store.dispatch('fit/ADD_FIT', this.parseDate)
      this.Close()
    },
    Close () {
      this.$emit('Close')
      console.log('to emit')
    }
  },
  computed: {
    parseDate () {
      if (this.date) {
        return {
          date: this.date.toISOString(),
          year: this.$moment(this.date).format('YYYY'),
          month: this.$moment(this.date).format('M'),
          day: this.$moment(this.date).format('D'),
          hour: this.$moment(this.date).format('H'),
          fitStrength: this.fitStrength
        }
      } else return null
    }
  }
}
</script>

<style scoped>
  .footer .q-btn {
    margin: 1em 1em 0em 1em;
  }
</style>
