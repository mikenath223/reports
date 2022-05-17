import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import Home from ".";

describe("Home", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
