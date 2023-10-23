import React from "react";
import { render } from "@testing-library/react";
import CoinContainer from "./CoinContainer";

it("renders without crashing", function() {
  render(<CoinContainer />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<CoinContainer />);
    expect(asFragment()).toMatchSnapshot();
  });