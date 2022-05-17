import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import SelectDropdown from ".";

describe("SelectDropdown", function () {
  it("should match snapshot", () => {
    const props = {
      selectedType: "ErtU",
      handleChange: jest.fn(),
      items: [
        {
          value: "ErtU",
          name: "Project 1",
        },
      ],
    };
    const { container } = render(
      <Provider store={store}>
        <SelectDropdown {...props} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
