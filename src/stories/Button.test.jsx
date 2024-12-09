import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "./Button";


describe('Button Component', () => {
    test('Ekranda buton belirmesi ve labelin görüntülenmesi', () => {
        render(<Button label="Button" />)
        const buttonElement = screen.getByText('Button')
        expect(buttonElement).toBeInTheDocument()
    })
})