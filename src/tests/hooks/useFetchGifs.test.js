import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    const category = 'Naruto';

    test('debe de regresar el estado inicial ', () => {

        const { result } = renderHook( () =>  useFetchGifs( category ) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y el isLoading in false ', async () => {

        const { result } = renderHook( () =>  useFetchGifs( category ) );

        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 5000
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });

})