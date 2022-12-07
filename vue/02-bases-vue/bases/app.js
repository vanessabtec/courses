// {{}} expresion válida de js

const app=Vue.createApp({

    //optionsAPI
    // template:
    // `
    // <h1>Hola mundo</h1>
    // <p>Desde app</p>
    // <p>{{1 +1 }}</p>
    // <p>{{ {"a":1, "b":2} }}</p>
    // <p>{{ [{},{},{},{},[]] }}</p>
    // <p>{{ 'true'? 'ACTIVO': 'INACTIVO' }}</p>
    // <p>{{ undefined}}</p>
    // `


    // methods:{},
    // watch:{},
    
    // //COMPOSITION.API
    
    // setup() {}

    data(){ //funcion, no propiedad
            return {
                message : 'Hola Mundo',
                quote: "I'm batman",
                author: "Bruce Wayne"
            }
    },
      methods:{
        changeQuote(event){
            console.log('Hola Mundo', event);
            this.author= "Silvia";
        }
      },
});

app.mount('#myApp')