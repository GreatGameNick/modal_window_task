<template>
  <div class="modal-wrapper">
    <div @click="onShutModal" class="modal-outside"></div>

    <div class="modal-place">
      <div class="modal-place__title">
        welcome {{GET_USER_NAME}}
      </div>

      <component :is="GET_MODAL_DATA.name"
                 class="modal-place__component"
      />

      <section>

        <button @click="onShutModal">SHUT MODAL WINDOW</button>
      </section>
    </div>
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
      GET_MODAL_DATA: 'GET_MODAL_DATA',
      GET_USER_NAME: 'GET_USER_NAME'
    })
  },
  methods: {
    ...mapMutations({
      SET_MODAL_COMPONENT_DATA: 'SET_MODAL_COMPONENT_DATA',
      SET_CHOSEN_LEVEL: 'SET_CHOSEN_LEVEL',
      SET_CHOSEN_FOLDER_ID: 'SET_CHOSEN_FOLDER_ID'
    }),
    onShutModal() {
      this.SET_MODAL_COMPONENT_DATA({name: '', title: '', dataId: null})
      this.SET_CHOSEN_LEVEL('')
      this.SET_CHOSEN_FOLDER_ID('')
    }
  }
}
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @extend %flex-center;

  .modal-outside {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: $greyLight;
    opacity: 0.8;
  }


  .modal-place {
    z-index: 20;
    width: 100%;
    max-width: rem(1000);
    margin: rem(40) auto;
    background: $white;
    opacity: 1;
    box-sizing: border-box;
    padding: rem(20);

    section {
      border: blue 1px solid;
      display: flex;
    }
  }

}
</style>