<template>
  <div class="home-wrapper">
    <div class="home-enter">
      <div>enter your name</div>
      <input type="text" v-model="userName" placeholder="your name" autofocus>
    </div>

    <button @click="onOpenModal">OPEN MODAL WINDOW</button>

  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      GET_USER_NAME: 'GET_USER_NAME'
    }),
    userName: {
      get() {
        return this.GET_USER_NAME
      },
      set(name) {
        this.SET_USER_NAME(name)
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_MODAL_COMPONENT_DATA: 'SET_MODAL_COMPONENT_DATA',
      SET_USER_NAME: 'SET_USER_NAME'
    }),
    onOpenModal() {
      this.SET_MODAL_COMPONENT_DATA({name: 'FolderThreeModalComponent', title: 'Demo folder set', dataId: 25})
    }
  }
}
</script>

<style scoped lang="scss">
.home-wrapper {
  position: relative;
  width: 100%;
  height: fit-content;

  .home-enter {
    margin: rem(40);
    text-transform: uppercase;

    input {
      margin-top: rem(10);
      box-sizing: border-box;
      padding: rem(4);
    }
  }

  button {
    margin: rem(60) auto  rem(100);
  }
}
</style>
