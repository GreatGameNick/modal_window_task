<template>
  <div>
    <FolderSet :key="GET_MODAL_DATA.dataId"
               :folderSet="GET_CURRENT_DATA_SET"
    />
  </div>
</template>

<script>
import FolderSet from "@/components/FolderSet"
import {mapGetters} from "vuex"

export default {
  name: "FolderThreeModalComponent",
  components: {
    FolderSet
  },
  computed: {
    ...mapGetters({
      GET_MODAL_DATA: 'GET_MODAL_DATA',
      GET_CURRENT_DATA_SET: 'GET_CURRENT_DATA_SET'
    })
  },
}
</script>

<style scoped>

</style>