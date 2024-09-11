<script setup>
import MainPage from "@/components/MainPage.vue";
import NoteEdition from "@/components/NoteEdition.vue";
import { shallowRef } from "vue";

const pagina = shallowRef(MainPage);

function backEvent() {
  pagina.value = MainPage;
}

function newNote() {
  pagina.value = NoteEdition;
}

</script>

<template>
  <div class="container">
    <component :is="pagina" :pagina="pagina" @backEvent="backEvent" @newNote="newNote" />
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
