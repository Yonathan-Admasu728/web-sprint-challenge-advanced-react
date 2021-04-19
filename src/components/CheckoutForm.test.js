import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
    expect(header).not.toBeTruthy()
    expect(header).toHaveTextContent("Checkout Form")

});

test("form shows success message on submit with form details", async () => {
     render(<CheckoutForm/>)
    //arrange
    const fnameInput = screen.getByLabelText(/first name/i)
    const lnameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const successMessage = await screen.queryByTestId('successMessage')
    //act/type some shit up
    userEvent.type(fnameInput,'Yonathan')
    userEvent.type(lnameInput, 'Admasu')
    userEvent.type(addressInput, '328 Harbor Gulf Court')
    userEvent.type(cityInput, "las Vegas")
    userEvent.type(stateInput, "nevada")
    userEvent.type(zipInput, "89084")

    const submitting = screen.getByRole("button",/checkout/i)
    userEvent.click(submitting)
    //assert
    expect(successMessage).toBeInTheDocument()

});
