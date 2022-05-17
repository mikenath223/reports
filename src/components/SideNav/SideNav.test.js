import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import SideNav from ".";

describe("Sidenav", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <SideNav />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
