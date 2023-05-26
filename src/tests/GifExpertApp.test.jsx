import { screen, render, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    
    const setup = () => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        return {
          input,
          form,
        };
    };

    test('debe agregar la nueva categoria ', () => {
        setup();
        expect( screen.getByText( 'GifExpertApp' ) );
    });

    test("debe agregar una categoria si no esta anteriormente", () => {

        const { input, form } = setup();
        fireEvent.change(input, { target: { value: 'Goku' } });
        fireEvent.submit(form);
     
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
    });

    test("debe no agregar una categoria si esta anteriormente", () => {

        const { input, form } = setup();
        fireEvent.change(input, { target: { value: 'Naruto' } });
        fireEvent.submit(form);
     
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
    });
})
