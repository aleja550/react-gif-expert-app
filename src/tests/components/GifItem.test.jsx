import { screen, render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Inuyasha';
    const url = 'https://media0.giphy.com/media/ZpBKWcx9A2juw/giphy.gif?cid=3271391fpyjoii7mpsth1i5b1jdwia97bhjkl58luzbtdu2s&ep=v1_gifs_search&rid=giphy.gif&ct=g';
        
    test('debe mostrar la imagen con el URL y el ALT indicado ', () => {
        render( <GifItem title={ title } url={ url} /> );
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe mostrar el titulo en el component', () => {
        render( <GifItem title={ title } url={ url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });
    
})
