import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button/Button";

describe("<Button />", () => {
  const renderComponent = () => render(<Button>My button</Button>);

  it("should render", () => {
    const { getByText } = renderComponent();
    const testComponent = getByText("My button");
    expect(testComponent.textContent).toBe("My button");
  });
});
