import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import TopNav from ".";

describe("Topnav", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <TopNav />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
