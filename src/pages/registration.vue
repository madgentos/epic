<template>
  <q-page padding>
    <h3>Регистрация</h3>
    <form action="#">
      <q-input v-model="email" type="email" float-label="Email" suffix="@gmail.com"/>
      <q-input v-model="password" float-label="Пароль минимум 6 символов" type="password"
               :after="[{icon: 'done', condition: password.length >= 6, handler () {}}]"/>
      <q-btn type="submit" label="Зарегистрироватся" icon="person_add" @click.prevent="this.register"/>
    </form>
  </q-page>
</template>

<script>
export default {
  name: 'registration',
  data () {
    return {
      password: '',
      email: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('user/Registration', { email: this.email, password: this.password })
    }
  }
}
</script>

<style>
</style>
