<template>
  <div class="main-wrapper">
    <header>
      <img src="@/assets/logo.png">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <div v-if="!!GET_SUBMIT" class="main-header__submit">
        your submitted result - {{GET_SUBMIT}}
      </div>
    </header>

    <router-view/>

    <MyModal v-if="!!GET_MODAL_DATA.name"/>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal'
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
  components: {
    MyModal
  },
  computed: {
    ...mapGetters({
      GET_MODAL_DATA: 'GET_MODAL_DATA',
      GET_SUBMIT: 'GET_SUBMIT'
    })
  },
  methods: {
    ...mapMutations({
      SET_MODAL_COMPONENT_DATA: 'SET_MODAL_COMPONENT_DATA'
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

<style lang="scss">
@import "assets/SCSS/main";

.main-wrapper {
  width: 100%;
  max-width: $desktopWidth;
  margin: rem(30) auto;

  header {
    display: flex;
    box-sizing: border-box;
    padding: rem(20);

    nav {
      margin: rem(10) rem(40);
    }

    .main-header__submit {
      height: fit-content;
      margin: rem(10) rem(40) rem(10) auto;
      box-sizing: border-box;
      padding: rem(6);
      color: $green;
      border-bottom: $green 1px solid;
    }
  }

  border: $grey 1px solid;
}

</style>
