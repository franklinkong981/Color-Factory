import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

import App from "./App.jsx";

describe("Test <App/> rendering", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the App component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

