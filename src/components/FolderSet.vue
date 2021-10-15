<template>
  <div>
    <div v-for="folder of folders" :key="folder.id">
      <div>
        <div @click="onTurnOutFolder(folder.id)">{{ folder.id }}</div>

        <FolderSet :folders="GET_FOLDER_SET(folder.id)"
                   :key="`FolderSet_${folder.id}`"
                   v-if="isFolderTurnOut(folder.id)"
        />

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'FolderSet',
  components: {
    FolderSet: () => import('@/components/FolderSet')
  },
  props: {
    folders: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    chosenFolders: [],
  }),
  computed: {
    ...mapGetters({
      GET_CHOSEN_FOLDER_ID: 'GET_CHOSEN_FOLDER_ID',
      GET_FOLDER_SET: 'GET_FOLDER_SET'
    })
  },
  methods: {
    isFolderTurnOut(id) {
      return this.GET_CHOSEN_FOLDER_ID.includes(id)
    },
    onTurnOutFolder(id) {
      if (this.chosenFolders.includes(id))
        this.chosenFolders = this.chosenFolders.push(id)
    }
  }
}
</script>

<style scoped>

</style>