import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('Test of <AddCategory />', () => {
    const inputValue = 'Saitama';
    test('should change the value of the text box', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');


        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });

        expect(input.value).toBe(inputValue);
    });

    test('Form should call onNewCategory if input has value', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });

        fireEvent.submit(form);
        //screen.debug();
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test("Shouldn't call onNewCategory if input is empty", () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});