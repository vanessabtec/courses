<template>
  <h2>{{customTitle}}</h2>
  <p >{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testId="counter">{{ counter }}</p>
  <div class="button_container">
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
 // props: ['title', 'start'], //properties previamente definida en props
 props:{
  title: String,
  start:{type:Number,
  default:100,
  validator(value){
    return value> 100
  }
  }
 },
  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    getSquareValue() {
      // return 'Hola mundo'
      console.log("getSquareValue");
      return this.counter * this.counter;
    }, increase() {
      this.counter++
    },
    decrease() {
      this.counter--
    },
  },
  computed: {
    //se guardan en caché, ayudan a hacer eficiente el proceso
    squareCounter() {
      // return 'Hola mundo'
      console.log("squareCounter");
      return this.counter * this.counter;
    },
    customTitle(){
      // return this.title?this.title:'Counter'
      return this.title|| 'Counter'
    }
   
  },
};
</script>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>