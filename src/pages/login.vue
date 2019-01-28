<template>
  <q-page padding>
    <h3>Вход</h3>
    <form @submit.prevent>
      <q-input v-model="email" type="email" float-label="Email" suffix="@gmail.com"/>
      <q-input v-model="password" float-label="Пароль" type="password"
               :after="[{icon: 'done', condition: password.length >= 6, handler () {}}]"/>
      <q-btn type="submit" label="Войти" icon="exit_to_app" @click.prevent="login"/>
    </form>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      password: '',
      email: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/SingIn', { email: this.email, password: this.password, redirect: this.$route.query.redirect })
    }
  },
  computed: {
    Authorised () {
      return this.$store.getters['user/Authorised']
    }
  },
  watch: {
    Authorised: function () {
      if (this.Authorised) {
        if (this.$route.query.redirect) {
          console.log('login ' + this.Authorised + ' ' + this.$route.query.redirect)
          this.$router.push(this.$route.query.redirect)
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style>
</style>
