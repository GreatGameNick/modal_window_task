<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <MyModal/>
    <button @click="onOpenModal">OPEN_MODAL_WINDOW</button>

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
      GET_FOLDER_SET: 'GET_FOLDER_SET'
    })
  },
  methods: {
    ...mapMutations({
      SET_MODAL_COMPONENT_NAME: 'SET_MODAL_COMPONENT_NAME',
      SET_MODAL_COMPONENT_DATA: 'SET_MODAL_COMPONENT_DATA'
    }),
    onOpenModal() {
      this.SET_MODAL_COMPONENT_NAME('FolderThreeModalComponent')
      this.SET_MODAL_COMPONENT_DATA(this.GET_FOLDER_SET('0'))
    }
  }
}
</script>

<style scoped lang="scss">
.my {
  color: $liteGreen;
}

</style>
