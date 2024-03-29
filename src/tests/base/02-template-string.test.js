import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string.js', () => { 


    test('getSaludo debe de retornar Hola Daniel!', () => { 

        const nombre = 'Daniel'

        const saludo =  getSaludo(nombre);

        // console.log(saludo);
        
        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

     });


    test('getSaludo debe de retornar Hola Bryan! si no hay argumento nombre', () => { 

        const saludo1 = getSaludo();


        expect( saludo1 ).toBe( 'Hola Bryan!' );
        
     })
    
 })