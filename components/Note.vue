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
  padding: 15px 20px; 
  border-radius: 15px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  background-color: #fff; 
  transition: transform 0.2s ease, box-shadow 0.2s ease; 
}

.box:hover {
  transform: translateY(-3px); 
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
}

.inner-box {
  flex: 1;
  padding-right: 10px; 
}

.texts {
  margin: 0;
  word-break: break-word;
  font-size: 1rem; 
  line-height: 1.5; 
  color: #333; 
}

#delete-button {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  color: red;
  background-color: transparent;
  border: 1px solid transparent;
  transition: 0.3s all ease; 
  font-size: 24px; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center; 
  cursor: pointer;
}

#delete-button:hover {
  background-color: rgba(255, 0, 0, 0.1); 
  border-color: red;
}

</style>
