<template>
  <div class="main-wrapper">
    <header>
      <img alt="Vue logo" src="@/assets/logo.png">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

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
  }

  border: $grey 1px solid;
}

</style>
