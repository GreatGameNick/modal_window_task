<template>
  <div>
    modal-close-btn

    <component :is="GET_MODAL_COMPONENT_NAME"
               :componentData="GET_MODAL_COMPONENT_DATA"
    />

  </div>
</template>

<script>
import FolderBranch from '@/components/FolderSet'
import {mapGetters} from 'vuex'

export default {
  name: "MyModal_1",
  components: {
    FolderBranch
  },
  computed: {
    ...mapGetters({
      GET_FOLDER_SET: 'GET_FOLDER_SET'
    })
  }
}
</script>

<style scoped>

</style>