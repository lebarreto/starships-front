/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./index";
import userEvent from "@testing-library/user-event";

describe("<SearchBar />", () => {
  const onSearchTest = jest.fn();

  it("should render searchbar component", () => {
    const { container } = render(
      <SearchBar
        placeholder="Placeholder text"
        title="title"
        onSearch={onSearchTest}
      />
    );
    const input = container.querySelector(`input[name="searchbar"]`);
    expect(input).toBeInTheDocument();
  });

  it("should change value on input", () => {
    const { container } = render(
      <SearchBar
        placeholder="Placeholder text"
        title="title"
        onSearch={onSearchTest}
      />
    );
    const input = container.querySelector(`input[name="searchbar"]`);
    userEvent.type(input!, "CR");
    expect(onSearchTest).toBeCalled();
  });
});
