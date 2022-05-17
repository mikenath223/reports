import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import GatewaySelect from ".";

describe("Gateway", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <GatewaySelect />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
