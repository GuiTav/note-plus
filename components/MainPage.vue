<script lang="ts" setup>
import Note from "@/components/Note.vue";
import { ref } from "vue";

const emit = defineEmits(["newNote"])

const notas = ref([]);

(async () => {
  let dados = await chrome.storage.local.get("notas");
  notas.value = dados.notas;

  chrome.storage.local.onChanged.addListener((mudancas) => {
    notas.value = mudancas.notas.newValue;
  });
})();

function newNote() {
  emit("newNote")
}
</script>

<template>
  <div class="notes">
    <Note v-for="nota in notas" :nota="nota" />
    <div v-if="notas.length == 0" class="box-sem-notas">
      <span class="material-symbols-outlined">sentiment_dissatisfied</span>
      <p class="msg-sem-notas">Não há notas criadas</p>
    </div>
    <div class="bottom-area">
      <button id="add-note-button" @click="newNote">Adicionar nota</button>
    </div>
  </div>
</template>

<style scoped>

.notes {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
  background-color: #f7f7f7; 
  border-radius: 10px; 
}

.box-sem-notas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: #999;
}

.msg-sem-notas {
  font-size: 1.1em;
  margin-top: 10px;
  color: #666;
}

.bottom-area {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#add-note-button {
  border: none;
  padding: 12px 40px;
  border-radius: 25px;
  background-color: #4CAF50;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  cursor: pointer;
  transition: 0.3s ease;
}

#add-note-button:hover {
  background-color: #45a049; 
}

.material-symbols-outlined {
  font-size: 48px;
  color: #75FB4C;
  margin-bottom: 10px;
  display: block;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>