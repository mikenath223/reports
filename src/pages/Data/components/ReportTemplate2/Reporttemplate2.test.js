import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import ReportTemplate2 from ".";

describe("ReportTemplate2", function () {
  it("should match snapshot", () => {
    const props = {
      title: "Project 1",
      reports: {
        data: [],
        total: 0,
      },
      totalTitle: "Project 1 | Gateway 1 ",
    };
    const { container } = render(
      <Provider store={store}>
        <ReportTemplate2 {...props} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
