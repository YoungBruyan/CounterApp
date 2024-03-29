import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones.js', () => { 
    

    test('getUser debe retornar un objeto', () => { 



        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        
        const user = getUser();


        expect( user ).toEqual( userTest)
        
        
     })



     test('getusuarioActivo debe de retornar un objeto', () => { 

        const userTest2 = {
            uid: 'ABC567',
            username: 'Daniel'
        }

        const user2 = getUsuarioActivo('Daniel');

        expect( user2 ).toEqual( userTest2 );
        
      })
    
    
 })