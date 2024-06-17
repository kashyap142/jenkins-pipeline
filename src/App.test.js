import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component without crashing", () => {
  render(<App />);
});

test('contains an h2 element with the text "Hello World!!"', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello World!!/i);
  expect(headingElement).toBeInTheDocument();
});

test('contains a p element with the text "This is a paragraph"', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/This is a paragraph/i);
  expect(paragraphElement).toBeInTheDocument();
});
