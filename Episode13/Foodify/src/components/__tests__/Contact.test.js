import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

test("should render heading of contact us page", () => {
    render(<ContactUs />);

    const heading = screen.getByText("Contact Us");

    expect(heading).toBeInTheDocument();
});

test("should render button of contact us page", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("should render input name inside contact us page", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("Enter name");

    expect(inputName).toBeInTheDocument();
});