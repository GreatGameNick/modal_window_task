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
import {mapGetters, mapMutations} from "vuex";

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
    ...mapMutations({
      SET_CHOSEN_LEVEL: 'SET_CHOSEN_LEVEL'
    }),
    isFolderTurnOut(id) {
      return this.GET_CHOSEN_FOLDER_ID.startsWith(id)
    },
    onTurnOutFolder(id) {
      if (this.GET_CHOSEN_FOLDER_ID.includes(id)) {    // переходим на 1 шаг назад от кликнутой папки
        let [aa, ...reversedPrevisionSet] = id.split('/').reverse()
        let previsionId = reversedPrevisionSet.reverse().join('/')
        this.SET_CHOSEN_LEVEL(previsionId)
      } else {
        this.SET_CHOSEN_LEVEL(id)
      }
    }
  }
}
</script>

<style scoped>

</style>