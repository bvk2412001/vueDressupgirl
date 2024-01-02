<template>
  <div class="container">
    <Game></Game>
    <Header></Header>
  </div>
</template>
<script>
import Game from "./layout/game/game.vue";
// import { ref } from 'vue';
import Header from "./layout/header/header.vue";
export default {
  name: "App",
  components: {
    Header,
    Game,
  },
};
</script>

<style>
@import url("./css/main.css");

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 0;
  width: 100dvw !important;
  height: 100dvh !important;
}
</style>