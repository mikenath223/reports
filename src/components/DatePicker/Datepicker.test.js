import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import DatePicker from ".";

describe("DatePicker", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <DatePicker />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
