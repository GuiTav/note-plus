<script setup>
import MainPage from "@/components/MainPage.vue";
import NoteEdition from "@/components/NoteEdition.vue";
import { shallowRef } from "vue";

const pagina = shallowRef(MainPage);

function changeScreen(screen) {
  pagina.value = screen;
}

</script>

<template>
  <div class="container">
    <component :is="pagina" @changeScreen="changeScreen" />
  </div>
</template>

<style scoped>
.container {
  width: 300px;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
