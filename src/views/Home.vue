<template>
  <div class="home-wrapper">
    <div class="home-enter">
      <div>enter your name</div>
      <input type="text" v-model="userName" placeholder="your name" autofocus>
    </div>

    <button @click="onOpenModal">OPEN MODAL WINDOW</button>

    <MyModal v-if="!!GET_MODAL_DATA.name"/>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal'
import {mapGetters, mapMutations, mapActions} from "vuex"

export default {
  name: 'Home',
  components: {
    MyModal
  },
  computed: {
    ...mapGetters({
      GET_MODAL_DATA: 'GET_MODAL_DATA',
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
    ...mapActions({
      FETCH_EXTERNAL_DATA: 'FETCH_EXTERNAL_DATA'
    }),
    onOpenModal() {
      this.SET_MODAL_COMPONENT_DATA({name: 'FolderThreeModalComponent', title: 'Demo folder set', dataId: 25})
    }
  },
  async created() {
    await this.FETCH_EXTERNAL_DATA()
  }
}
</script>

<style scoped lang="scss">
.home-wrapper {
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
    display: block;
    width: 100%;
    max-width: rem(300);
    margin: rem(60) auto  rem(100);
    padding: rem(10) rem(20);
    cursor: pointer;
  }
}
</style>
