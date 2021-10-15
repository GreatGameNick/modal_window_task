<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <MyModal v-if="!!GET_MODAL_DATA.name"/>
    <hr>
    <button @click="onOpenModal">OPEN MODAL WINDOW</button>

  </div>
</template>

<script>
import MyModal from '@/components/MyModal'
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'Home',
  components: {
    MyModal
  },
  computed: {
    ...mapGetters({
      GET_MODAL_DATA: 'GET_MODAL_DATA'
    })
  },
  methods: {
    ...mapMutations({
      SET_MODAL_COMPONENT_DATA: 'SET_MODAL_COMPONENT_DATA'
    }),
    onOpenModal() {
      this.SET_MODAL_COMPONENT_DATA({name: 'FolderThreeModalComponent', title: 'Demo folder set', dataId: 25})
    }
  },
  created() {
    console.log('=window.location=', window.location)
  }
}
</script>

<style scoped lang="scss">
.my {
  color: $liteGreen;
}

</style>
