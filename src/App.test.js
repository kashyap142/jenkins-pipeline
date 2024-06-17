// src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  render(<App />);

  // Check if the text "Hello World!!" is present
  const headingElement = screen.getByText(/Hello World!!/i);
  expect(headingElement).toBeInTheDocument();

  // Check if the text "This is a paragraph" is present
  const paragraphElement = screen.getByText(/This is a paragraph/i);
  expect(paragraphElement).toBeInTheDocument();
});
