/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render } from "@testing-library/react";
import Table from "./index";

describe("<Table />", () => {
  const starshipsMock = [
    {
      name: "CR90 corvette",
      model: "CR90 corvette",
      manufacturer: "Corellian Engineering Corporation",
    },
    {
      name: "Star Destroyer",
      model: "Imperial I-class Star Destroyer",
      manufacturer: "Kuat Drive Yards",
    },
  ];

  it("should render table component", () => {
    const { getByText } = render(<Table starships={starshipsMock} />);
    const manufacturerValue = getByText(/Corellian Engineering/i);
    expect(manufacturerValue).toBeInTheDocument();
  });

  it("should render new data when starship state updates", () => {
    const updatedStarships = [
      ...starshipsMock,
      {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
      },
    ];
    const { getByText } = render(<Table starships={updatedStarships} />);
    const nameValue = getByText(/Millennium/i);
    expect(nameValue).toBeInTheDocument();
  });
});
