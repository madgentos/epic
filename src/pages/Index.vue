<template>
  <q-page class="flex flex-center">
    <q-btn label="New item" @click="upcount"/>
    <br>
    {{count}}
    {{Authorised}}
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    upcount () {
      this.$store.dispatch('user/countActionUP')
    }
  },
  computed: {
    count () {
      return this.$store.getters['user/getCount']
    },
    Authorised () {
      return this.$store.getters['user/Authorised']
    }
  }
}
</script>
