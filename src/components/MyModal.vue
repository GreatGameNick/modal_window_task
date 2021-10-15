<template>
  <div>
    <div>
      {{GET_MODAL_DATA.title}}
    </div>

    <component :is="GET_MODAL_DATA.name"/>

    <button @click="onShutModal">SHUT MODAL WINDOW</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "MyModal_1",
  components: {
    FolderThreeModalComponent: () => import('@/components/FolderThreeModalComponent')
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
    onShutModal() {
      this.SET_MODAL_COMPONENT_DATA({name: '', title: '', dataId: null})
    }
  }
}
</script>

<style scoped>

</style>