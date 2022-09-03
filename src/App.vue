<template>
  <div id="app">
    <AvtoBuy />
  </div>
</template>

<script>

import AvtoBuy from './components/avtobuy.vue'

export default {
  name: 'App',
  components: {
    AvtoBuy
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
#app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

@font-face {
    font-family: Akrobat;
    src: url(./assets/fonts/Akrobat-Regular.otf);
   }
</style>
