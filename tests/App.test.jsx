import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";


describe("App", () => {
  it("places TV posters on the homepage, and proves API info gets pulled", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const posters = await screen.findAllByRole("img");

    expect(posters.length).toBeGreaterThan(0);
  });
});


describe("App", () => {
  it("loads the navbar and it's child components", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const buttons = await screen.getAllByRole("button");

    expect(buttons.length).toBeGreaterThan(5);

    expect(
      screen.getByText("Terrific TV Time")
    ).toBeInTheDocument();
  })
})