<template>
  <div class="modal-wrapper">
    <div @click="onShutModal" class="modal-outside"></div>

    <div class="modal-place">
      <header>
        <div class="modal-header__title">
          welcome {{GET_USER_NAME}}
        </div>
        <div @click="onShutModal" class="modal-place__control">
          &times;
        </div>
      </header>

      <component :is="GET_MODAL_DATA.name"
                 class="modal-place__component"
      />

      <footer>
        <div v-show="!!GET_CHOSEN_FOLDER_ID" class="modal-footer__choice">
          your current choice -
          <span :class="{'no-choice': GET_CHOSEN_FOLDER_ID === 'no chosen eny folder'}">
            {{GET_CHOSEN_FOLDER_ID}}
          </span>
        </div>
        <button @click="onShutModal">SHUT MODAL WINDOW</button>
        <button @click="onSend">OK</button>
      </footer>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "MyModal",
  components: {
    FolderThreeModalComponent: () => import('@/components/FolderThreeModalComponent')
  },
  computed: {
    ...mapGetters({
      GET_MODAL_DATA: 'GET_MODAL_DATA',
      GET_USER_NAME: 'GET_USER_NAME',
      GET_CHOSEN_FOLDER_ID: 'GET_CHOSEN_FOLDER_ID'
    })
  },
  methods: {
    ...mapMutations({
      SET_MODAL_COMPONENT_DATA: 'SET_MODAL_COMPONENT_DATA',
      SET_CHOSEN_LEVEL: 'SET_CHOSEN_LEVEL',
      SET_CHOSEN_FOLDER_ID: 'SET_CHOSEN_FOLDER_ID',
      SET_MODAL_RESULT: 'SET_MODAL_RESULT'
    }),
    onShutModal(event) {
      if(event == null || event.type === "click" || event.key === 'Escape') {
        this.SET_MODAL_COMPONENT_DATA({name: '', title: '', dataId: null})
        this.SET_CHOSEN_LEVEL('')
        this.SET_CHOSEN_FOLDER_ID('')
      }
    },
    onSend () {
      if(this.GET_CHOSEN_FOLDER_ID && this.GET_CHOSEN_FOLDER_ID !== 'no chosen eny folder') {
        this.SET_MODAL_RESULT()
        this.onShutModal()
      } else {
        this.SET_CHOSEN_FOLDER_ID('no chosen eny folder')
      }

    }
  },
  created() {
    document.addEventListener('keyup', this.onShutModal)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onShutModal)
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

    header {
      width: 100%;
      height: rem(60);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;

      .modal-header__title {
        text-transform: uppercase;
        color: $green;
      }

      .modal-place__control {
        width: rem(20);
        height: rem(20);
        font-size: rem(40);

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }

    footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: rem(20) 0;

      @media (max-width: $iPade) {
        flex-flow: column;
        justify-content: center;
      }

      .modal-footer__choice {
        margin-right: auto;

        @media (max-width: $iPade) {
          margin: rem(20) 0 0;
        }
      }

      button {
        margin-left: rem(20);

        @media (max-width: $iPade) {
          margin: rem(20) 0 0;
        }
      }

    }
  }
}

.no-choice {
  color: $error;
}
</style>