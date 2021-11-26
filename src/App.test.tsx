import React from "react";

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Create React App v5 example with styled-components and TypeScript/i
  );
  expect(linkElement).toBeInTheDocument();
});
