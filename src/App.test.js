import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import SearchBar from "./components/search-bar";

test("renders screen app", () => {
  render(
    <Provider>
      <App />
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  screen.debug();
});

test("renders searchbar values", () => {
  render(<SearchBar />);
  const labelValue = screen.getByText(/title gif/i);
  const searchValue = screen.getByText(/search/i);

  expect(labelValue).toBeInTheDocument();
  expect(searchValue).toBeInTheDocument();
});
