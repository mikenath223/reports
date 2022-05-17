import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import ReportTemplate3 from ".";

describe("ReportTemplate3", function () {
  it("should match snapshot", () => {
    const props = {
      title: "Project 1",
      reports: [],
    };
    const { container } = render(
      <Provider store={store}>
        <ReportTemplate3 {...props} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
