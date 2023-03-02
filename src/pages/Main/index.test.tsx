/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render } from "@testing-library/react";
import Main from "./index";

describe("<Main />", () => {
  it("should render main component", () => {
    const { getByText, container } = render(<Main />);
    const headerText = getByText(/Naves do Star Wars/i);
    const input = container.querySelector(`input[name="searchbar"]`);
    expect(headerText).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
