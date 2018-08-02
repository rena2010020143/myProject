<template>
  <div>
    <input type="text" v-model="text" >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'demo',
  computed: mapState({
    msg: state => state.msg.msg
  }),
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.text = this.msg
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
