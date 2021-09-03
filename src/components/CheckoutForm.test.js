import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const checkoutBtn = screen.getByRole('button');

    userEvent.type(firstNameInput,"Brent");
    userEvent.type(lastNameInput, "Besselievre");
    userEvent.type(addressInput, "1234 State Street");
    userEvent.type(cityInput, "Layton");
    userEvent.type(stateInput, "Utah");
    userEvent.type(zipInput, "84040");
    userEvent.click(checkoutBtn);

    const successMessage = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
    expect(successMessage).toBeInTheDocument();

    

    
});
