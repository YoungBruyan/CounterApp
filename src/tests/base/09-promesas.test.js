import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

jest.setTimeout(20000);

describe('Pruebas con promesas.js', () => { 
    
    test('Debe de retornar un heroe Async', ( done ) => { 
        
        const id = 1;


        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe(heroes[0]);
                done();
            });
        
        
     });


     test('Debe de tener un error si el heroe por id no existe', ( done ) => { 
         
        const id = 10

        getHeroeByIdAsync( id )
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
        
      });
     
     
 })