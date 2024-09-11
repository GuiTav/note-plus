<script setup>
import Note from "@/components/Note.vue";
// import { storage } from 'wxt/storage';
import { ref } from 'vue';

const notas = ref([]);

(async () => {
  let dados = await chrome.storage.local.get("notes");
  notas.value = dados.notes;
})();

</script>

<template>
  <div class="container">
    <Note v-for="nota in notas" :title="nota" msg="mensagem" />
  </div>
  <!-- <HelloWorld msg="WXT + Vue" /> -->
</template>

<style scoped>
.container {
    position: fixed;
    z-index: 9999;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
