import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nitro from "./Nitro";
import "jest-styled-components";

describe("<Nitro />", () => {
  it("test basic render", async () => {
    const { getByTestId } = render(<Nitro value={5} />);

    await waitFor(() =>
      expect(getByTestId("nitrobar-content")).toHaveStyle("width: 50%")
    );
  });

  it("test snapshot", () => {
    const { container } = render(<Nitro value={5} />);
    
    expect(container.firstChild).toMatchSnapshot();
  });
});
