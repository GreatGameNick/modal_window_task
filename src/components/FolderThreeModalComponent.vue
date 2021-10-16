<template>
  <div class="folder-wrapper">
    <header class="folder-header">
      {{GET_MODAL_DATA.title}}
    </header>
    <main>
      <FolderSet :key="GET_MODAL_DATA.dataId"
                 :folders="GET_CURRENT_DATA_SET"
      />
    </main>

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
      GET_CHOSEN_LEVEL: 'GET_CHOSEN_LEVEL',
      GET_CHOSEN_FOLDER_ID: 'GET_CHOSEN_FOLDER_ID'
    })
  },
}
</script>

<style scoped lang="scss">
.folder-wrapper {
  border: $green 1px solid;

  header {
    height: rem(40);
    @extend %flex-center;
    padding: 0;
    text-transform: uppercase;
  }

  main {
    margin: rem(20);
    box-sizing: border-box;
    padding: 0 rem(10);
    border-left: $grey 1px solid;
  }

}
</style>