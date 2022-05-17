import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import Collapsible from ".";

describe("Collapsible", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Collapsible />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
