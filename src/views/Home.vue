<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="my">
      ПРИВЕТ !
    </div>
    <MyModal01/>


  </div>
</template>

<script>
import MyModal01 from '@/components/MyModal01'

export default {
  name: 'Home',
  components: {
    MyModal01
  }
}
</script>

<style scoped lang="scss">
.my {
  color: $liteGreen;
}

</style>
