import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";


describe("App", () => {
  it("places TV posters on the homepage, and proves API info gets pulled, tests DisplayShows component", async () => {
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
  it("loads the navbar and it's child components, tests Navbar", async () => {
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

describe("tests route functionality", ()=>{
it("loads the about page route", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/about/i)).toBeInTheDocument();
  })
})

describe("tests TvCard component", ()=>{
  it("loads the TV details page route", async () => {
    render(
      <MemoryRouter initialEntries={["/show/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Genres:/i)).toBeInTheDocument();
    expect(await screen.findByText(/Rating:/i)).toBeInTheDocument();
  })
})
