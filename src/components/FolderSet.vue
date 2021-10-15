<template>
  <div v-for="(item, ind) of setData" :key="setData">
    <div>{{ item.id }}</div>
    <FolderSet :folderSet="GET_FOLDER_SET"
                  @click="turnOut(item.id)"
                  v-if="chosenFolders.includes(item.id) "
    />

  </div>
</template>

<script>
import FolderSet from '@/components/FolderSet'
import {mapGetters} from "vuex";

export default {
  components: {
    FolderSet
  },
  data: () => ({
    chosenFolders: [],
  }),
  computed: {
    ...mapGetters({
      GET_FOLDER_SET: 'GET_FOLDER_SET'
    })
  },
  methods: {
    turnOut(id) {
      if (this.chosenFolders.includes(id))
        this.chosenFolders = this.chosenFolders.push(id)
    }
  }

}
</script>

<style scoped>

</style>