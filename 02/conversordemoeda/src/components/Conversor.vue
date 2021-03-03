<template>
  <div>
    <h1>Conversor de Moedas</h1>
    O valor de R$: 
    <input type="number" v-model="valorUm" v-on:input="converte()">
    convertido em 
    <input type="text" v-model="nomeMoedaDois"> 
    cuja cotação é 
    <input type="number" v-model="cotacaoDois" v-on:input="converte()">
    da 
    <span class="result-span">{{ converte() }}</span> 
  </div>
</template>

<script>
export default {
  name: 'Conversor',
  data: () => {
    return {
      nomeMoedaDois: '',
      valorUm: 0,
      cotacaoDois: 0,
    }
  },
  methods: {
    converte() {
      if( this.cotacaoDois && this.valorUm) {
        return this.cotacaoDois * this.valorUm
      }
    }
  },
}
</script>
<!-- Adicionando "scoped" limitamos esse estilo a esse componente -->
<style scoped>
  .result-span {
    font-size: 3rem;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

