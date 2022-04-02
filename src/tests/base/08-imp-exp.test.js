import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp.js', () => { 

    test('debe de retornar un heroe por id', () => { 

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual( heroeData );
        
        
     })

    test('debe de retornar undefined si Heroe no existe', () => { 
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );
        
        
     })

    test('debe retornar un arreglos con los heroes de DC', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
        
     })

    test('debe de retornar un arrglo de con 2 objetos', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter(h => h.owner === owner).length;

        expect(heroes.length).toBe(heroesData);
        
     })
    
 })