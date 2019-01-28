<template>
  <div class="fit-com">
    <div>Add Fit</div>
    <q-datetime v-model="date" type="datetime" :max="dateNow" />
    <q-select
      v-model="fitStrength"
      float-label="Сила приступа"
      :options="fitStrengthListOptions"
    />
    <q-btn icon="power_settings_new" label="Добавить" @click="AddFit"/>
    <div class="column">
      <div class="item">date {{date}}</div>
      <div v-if="date" class="item">parse year {{parseDate.year}}</div>
      <div v-if="date" class="item">parse month {{parseDate.month}}</div>
      <div v-if="date" class="item">parse day {{parseDate.day}}</div>
      <div v-if="date" class="item">parse hour {{parseDate.hour}}</div>
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
    }
  },
  computed: {
    parseDate () {
      if (this.date) {
        return {
          date: this.date,
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

<style>
</style>
