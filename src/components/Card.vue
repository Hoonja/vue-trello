<template>
  <Modal>
    Card
    <div v-if="loading">Loading card..</div>
    <div v-else>cid: {{ cid }}</div>    
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  components: {
    Modal
  },
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>
