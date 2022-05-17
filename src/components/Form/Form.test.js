import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import Form from ".";

describe("Form", function () {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should generate report", async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Generate report/i));
    await waitFor(() => screen.findByText(/All Projects/i));
    expect(screen.getByText(/All Projects/i)).toBeInTheDocument();
  });
});
