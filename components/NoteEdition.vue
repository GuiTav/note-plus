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
          <input type="radio" value="#ffffff" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#ffffff"></div>
        </div>

        <div class="radio-line">
          <input type="radio" value="#bbffbb" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#bbffbb"></div>
        </div>

        <div class="radio-line">
          <input type="radio" value="#ffbbbb" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#ffbbbb"></div>
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
          <input type="radio" value="#ffffbb" v-model="cor" class="radio"/>
          <div class="color-box" style="background-color:#ffffbb"></div>
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
* {
  box-sizing: border-box;
}

.box {
  text-align: left;
}

.caixa {
  width: 100%;
}

.mensagem {
  min-height: 100px;
}

.radio-box {
  margin-bottom: 20px;
}

.centered-line {
  display: flex;
  justify-content: space-around;
}

input.radio {
  margin-left: 0px;
}

.radio-line {
  display: flex;
  align-items: center;
}

.color-box {
  width: 10px;
  height: 10px;
  border: 1px solid black;
  display: inline-block;
}

.bottom-area {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
}

.buttons {
  border: 1px solid black;
  padding: 10px 30px;
  border-radius: 20px;
  color: black;
}
</style>
