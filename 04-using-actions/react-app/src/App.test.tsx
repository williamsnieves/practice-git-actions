import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toBeDefined();
  });

  it("displays the correct title", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/vite \+ react/i);
  });
});
