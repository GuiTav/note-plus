<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  nota: { id: String, titulo: String, mensagem: String, cor: String },
});

async function deleteNote() {
  let dados = await chrome.storage.local.get("notas");
  let notas = dados.notas;

  let newNotas = notas.filter(nota => {
    if (nota.id == props.nota.id) {
      return false;
    }
    return true
  })
  
  await chrome.storage.local.set({notas: newNotas});
}
</script>

<template>
  <div class="box" :style="{'background-color': nota.cor}">
    <div class="inner-box">
      <h3 class="texts">{{ nota.titulo }}</h3>
      <p class="texts">{{ nota.mensagem }}</p>
    </div>
    <button id="delete-button" @click="deleteNote"><b>×</b></button>
  </div>
</template>

<style scoped>
.box {
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 20px;
}

.inner-box {
  flex: 1;
}

.texts {
  margin: 0px;
  word-break: break-word;
}

#delete-button {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  color: red;
  background-color: transparent;
  border: 1px solid transparent;
  transition: 0.2s all;
  font-size: 30px;
  border-radius: 20px;
}

#delete-button:hover {
  border-color: red;
}
</style>
