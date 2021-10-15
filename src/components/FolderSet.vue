<template>
  <div>
    <div v-for="item of folderSet" :key="item.id">
      <div>{{ item.id }}</div>

<!--      <FolderSet :folderSet="GET_FOLDER_SET"-->
<!--                 :key="`FolderSet_${item.id}`"-->
<!--                 @click="turnOut(item.id)"-->
<!--                 v-if="chosenFolders.includes(item.id) "-->
<!--      />-->

    </div>
  </div>
</template>

<script>
import FolderSet from '@/components/FolderSet'
import {mapGetters} from "vuex";

export default {
  name: (() => "FolderSet_" + Math.floor(Math.random() * 1000000))(),
  components: {
    FolderSet
  },
  props: {
    folderSet: {
      type: Array,
      required: true
    }
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