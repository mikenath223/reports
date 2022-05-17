import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import ProjectsSelect from ".";

describe("ProjectsSelect", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <ProjectsSelect />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
