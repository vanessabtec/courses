describe('Example Component', ()=> {
test('Debe ser mayor a 10', () => {
   //Arreglar
   let value=10;
   //Actuar - Estimulo
   value=value+2
   //Observar el resultado
   expect(value).toBeGreaterThan(10);
})

 
})