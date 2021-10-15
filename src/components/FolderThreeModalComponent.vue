<template>
  <div>
    <div>
      {{GET_MODAL_DATA.title}}
    </div>
    <div>
      your chosen folder => {{GET_CHOSEN_FOLDER_ID}}
    </div>

    <FolderSet :key="GET_MODAL_DATA.dataId"
               :folders="GET_CURRENT_DATA_SET"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "FolderThreeModalComponent",
  components: {
    FolderSet: () => import('@/components/FolderSet')
  },
  computed: {
    ...mapGetters({
      GET_MODAL_DATA: 'GET_MODAL_DATA',
      GET_CURRENT_DATA_SET: 'GET_CURRENT_DATA_SET',
      GET_CHOSEN_FOLDER_ID: 'GET_CHOSEN_FOLDER_ID'
    })
  },
}
</script>

<style scoped>

</style>