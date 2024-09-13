<script lang="ts" setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const emit = defineEmits(["backEvent"]);

const titulo = ref();
const mensagem = ref();
const cor = ref("#ffffff");

async function criarNota() {
  let dados = await chrome.storage.local.get("notas");
  let notas = dados.notas;
  notas.push({
    id: uuidv4(),
    titulo: titulo.value,
    mensagem: mensagem.value,
    cor: cor.value,
  });

  await chrome.storage.local.set({ notas });

  emit("backEvent");
}

function backButton() {
  emit("backEvent");
}
</script>

<template>
  <div class="box">
    <p>Título:</p>
    <input class="caixa" v-model="titulo"></input>

    <p>Mensagem:</p>
    <textarea class="caixa mensagem" v-model="mensagem"></textarea>

    <div class="radio-box">
      <p>Cor:</p>
      <div class="centered-line">
        <div class="radio-line">
          <input type="radio" value="#bbffbb" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#bbffbb"></div>
        </div>

        <div class="radio-line">
          <input type="radio" value="#bbbbff" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#bbbbff"></div>
        </div>

        <div class="radio-line">
          <input type="radio" value="#ffbbff" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#ffbbff"></div>
        </div>
        <div class="radio-line">
          <input type="radio" value="#bbffff" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#bbffff"></div>
        </div>
      </div>
    </div>

  </div>
  <div class="bottom-area">
    <button class="buttons" @click="backButton">Voltar</button>
    <button class="buttons" style="background-color:chartreuse" @click="criarNota">Enviar</button>
  </div>
</template>

<style scoped>
.box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

p {
  margin-bottom: 8px;
  font-size: 1.1em;
  color: #333;
}

.caixa {
  width: 240px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

.mensagem {
  min-height: 100px;
}

.radio-box {
  margin-bottom: 15px;
}

.centered-line {
  display: flex;
  align-items: center;
}

.radio-line {
  display: flex;
  justify-items: center;
  padding-left: 10px;
}

.radio {
  margin-right: 10px;
  cursor: pointer;
}

.color-box {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: border 0.3s ease;
}
.radio:checked + .color-box {
  border-color: #333;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
}
.bottom-area {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
button:hover {
  background-color: #45a049;
}
</style>
