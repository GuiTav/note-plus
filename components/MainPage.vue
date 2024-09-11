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
}

.box-sem-notas {
  width: 100%;
  padding: 10px;
}

.msg-sem-notas {
  width: 100%;
  text-align: center;
}

.bottom-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

#add-note-button {
  border: 0px;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: chartreuse;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
