import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter"


describe('Counter Component', ()=> {

    let wrapper
   
    beforeEach(()=> {
        wrapper = shallowMount(Counter)
    })


   //1. Snapshot
// test('Debe de hacer match con el snapshot', ()=> {

//     expect(wrapper.html()).toMatchSnapshot()
// })

// //2. Verificar valor en etiqueta HTML
// test('h2 debe tener el valor por defecto Counter', ()=> {

//     const h2 = wrapper.find('h2')
//     expect(wrapper.find('h2').exists()).toBeTruthy()
//     expect(h2.text()).toBe('Counter')
//     // wrapper.findAll('h2')
    
// })

// //3. FindAll vs Fin
// test('el valor por defecto debe ser 100 en el p', ()=> {

//     const pTags = wrapper.find('[data-testId="counter"]')
//     expect(pTags.text()).toBe('100')
    
// })

// //4. +1 
// test('debe de incrementar en 1 el valor del contador', async()=> {

//     const increaseBtn = wrapper.find('button')
//     await increaseBtn.trigger('click')
//     const value = wrapper.find('[data-testId="counter"]').text()
//     expect(value).toBe('101')
// })
// //5. -1 
// test('debe de disminuir en 1 el valor del contador', async()=> {

//     const decreaseBtn = wrapper.findAll('button')
//     await decreaseBtn[1].trigger('click')
//     const value = wrapper.find('[data-testId="counter"]').text()
//     expect(value).toBe('99')
// })
//6. increase - decrease;
// test('debe de incrementar/disminuir en 1 el valor del contador', async()=> {

//     const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
//     await increaseBtn.trigger('click')
//     await increaseBtn.trigger('click')
//     await increaseBtn.trigger('click')
//     await decreaseBtn.trigger('click')
//     await decreaseBtn.trigger('click')
//     const value = wrapper.find('[data-testId="counter"]').text()
//     expect(value).toBe('101')
// })
//7
test('debe establecer el valor por defecto', ()=> {
const {start} = wrapper.props();
// const start = wrapper.props('start');
// console.log(typeof start)
  const value = wrapper.find('[data-testId="counter"]').text()
expect(Number(value)).toBe(start)
})
//8
test('debe mostrar la prop title', ()=> {
  const title= 'Hola Mundo!!!'
  const wrapper = shallowMount(Counter,{
    props:{
      title,
      start:'5'
    }
  })
  expect(wrapper.find('h2').text()).toBe(title)
})



})

//yarn test:unit
//yarn test:unit [componente]