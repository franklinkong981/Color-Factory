import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

import App from "./App.jsx";
import { describe, expect, it } from "vitest";

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

describe("Tests <App /> functionality", function() {
  it("does exactly what it's supposed to do", async function() {
    const {getByLabelText, getByText, findByText, queryByText} = render((
      <MemoryRouter initialEntries={['/colors']}>
        <App/>
      </MemoryRouter>
    ));

    //we should start out at the /colors homepage.
    let colorListHeader = getByText("Welcome to the Color Factory!");
    expect(colorListHeader).toBeInTheDocument();

    //There should be 3 links: Red, Yellow, and Green.
    const redLink = getByText("Red");
    expect(redLink).toBeInTheDocument();
    const yellowLink = getByText("Yellow");
    expect(yellowLink).toBeInTheDocument();
    const greenLink = getByText("Green");
    expect(greenLink).toBeInTheDocument();

    //button for new color form should be here too.
    const newColorFormButton = getByText("Add New Color");
    expect(newColorFormButton).toBeInTheDocument();
    fireEvent.click(newColorFormButton);

    //now we should be at the new color form page. Among the elements rendered should be 2 input fields and a form submit button.
    const colorNameField = getByLabelText("Color name:");
    expect(colorNameField).toBeInTheDocument();
    expect(colorNameField.value).toEqual("");
    const hexField = getByLabelText("Hex value:");
    expect(hexField).toBeInTheDocument();
    expect(hexField.value).toEqual("#000000");

    //Add a blue color to the colors List, we should be redirected to the /colors homepage upon submitting the form.
    fireEvent.change(colorNameField, {target: {value: "Blue"}});
    expect(colorNameField.value).toEqual("Blue");
    fireEvent.change(hexField, {target: {value: "#0000FF"}});

    const formSubmitButton = getByText("Add Color");
    expect(formSubmitButton).toBeInTheDocument();
    fireEvent.click(formSubmitButton);

    //we should be back at the home page now, there should now be a Blue link.
    colorListHeader = await findByText("Welcome to the Color Factory!");
    expect(colorListHeader).toBeInTheDocument();
    let blueLink = getByText("Blue");
    expect(blueLink).toBeInTheDocument();
    fireEvent.click(blueLink);

    //we should now be on the Blue color details page.
    const blueDescription = getByText("This is Blue, hex value: #0000ff");
    expect(blueDescription).toBeInTheDocument();
    expect(blueDescription.parentElement).toHaveStyle({backgroundColor: "#0000ff"});
    const homeButton = getByText("Go to Home Page");
    expect(homeButton).toBeInTheDocument();
    fireEvent.click(homeButton);

    //we should be back at the home page, now for one final step we test the Reset colors button.
    colorListHeader = getByText("Welcome to the Color Factory!");
    expect(colorListHeader).toBeInTheDocument();
    blueLink = getByText("Blue");
    expect(blueLink).toBeInTheDocument();

    const resetButton = getByText("Reset Colors");
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);

    //now the blue link should no longer be here.
    blueLink = queryByText("Blue");
    expect(blueLink).not.toBeInTheDocument();
  });
});