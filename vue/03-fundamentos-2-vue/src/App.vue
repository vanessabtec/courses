<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <h2>{{msg.toLocaleUpperCase()}}</h2>
  <input v-model="msg">
 
  <Counter :start="15" title="Hola MUNDO"/>
  <Counter /> -->

  <Indecision/>
</template>

<script>

import {ref} from 'vue'
// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'
// const msg =ref('Hello word');

export default {
  name: 'App',
  components: {
    // Counter
    Indecision
  },
//   data() {
//  return {
//   msg
//  }}
}

</script>

<style>

#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
