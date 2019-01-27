<template>
  <q-page padding>
    <h2>Профиль</h2>
    <!-- content -->{{autorised}}
  </q-page>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    autorised () {
      return this.$store.getters['user/Authorised']
    }
  }
}
</script>

<style>
</style>
