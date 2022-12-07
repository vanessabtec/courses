import { shallowMount} from "@vue/test-utils";
import Indecision from "@/components/Indecision"


describe('Indecision Component', ()=> {

    let wrapper
    let clgSpy
    global.fetch=jest.fn(()=> Promise.resolve({
        json: () => Promise.resolve(

            {
                "answer": "yes",
                "forced": false,
                "image": "https://yesno.wtf/assets/yes/2.gif"
              }

        )
}))
   
    beforeEach(()=> {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
    })


   //1. Snapshot
        test('Debe de hacer match con el snapshot', ()=> {
            expect(wrapper.html()).toMatchSnapshot()
        })

        test('escribir en el input no debe de disparar nada console.log ', async()=> {

            const getAnswerSpy=jest.spyOn(wrapper.vm,'getAnswer'); //instancia de vue
            const input= wrapper.find('input')
            await input.setValue('Hola Mundo')
            expect(clgSpy).toHaveBeenCalled()
            expect(clgSpy).toHaveBeenCalledTimes(1)
            expect(getAnswerSpy).toHaveReturnedTimes(0)
            expect(getAnswerSpy).not.toHaveBeenCalled()

            // console.log(wrapper.vm);
        })
        test('escribir el simbolo ? debe  de disparar el getAnswer', async()=> {

            const getAnswerSpy=jest.spyOn(wrapper.vm,'getAnswer'); //instancia de vue
            const input= wrapper.find('input')
            await input.setValue('Hola Mundo?')
            expect(getAnswerSpy).toHaveBeenCalledTimes(1)

        })
        test('pruebas en getAnswer', async ()=> {
                await wrapper.vm.getAnswer()
                const image=wrapper.find('img')
                expect(image.exists()).toBeTruthy()
                expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif')
                expect(wrapper.vm.answer).toBe('Si!')

        })
        test('pruebas en getAnswer - Fallo en el API', async ()=> {

             fetch.mockImplementationOnce( ()=> Promise.reject('API is down'))
             await wrapper.vm.getAnswer()
            const image=wrapper.find('img')
            expect(image.exists()).toBeFalsy()
            expect(wrapper.vm.answer).toBe('No se pudo cargar del API')


        })
})