
describe('Pruebas en el archivo demos.test.js', () => { 


    test('deben ser iguales los string', () => {

        // 1. Inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
        
    });
    
    
    
 })


