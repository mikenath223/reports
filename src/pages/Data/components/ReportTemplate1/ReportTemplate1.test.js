import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import ReportTemplate1 from ".";

describe("ReportTemplate1", function () {
  it("should match snapshot", () => {
    const props = {
      title: "Project 1",
      reports: {
        data: [],
        total: 0,
      },
    };
    const { container } = render(
      <Provider store={store}>
        <ReportTemplate1 {...props} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
