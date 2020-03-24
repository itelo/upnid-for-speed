import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Typography from "./Typography";
import "jest-styled-components";

describe("<Typography />", () => {
  it("test basic render without passing any props", async () => {
    const { container, getByTestId } = render(
      <Typography data-testid="text">hello</Typography>
    );

    expect(getByTestId("text")).toHaveTextContent("hello");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test basic render with family='FasterOne'", async () => {
    const { container, getByTestId } = render(
      <Typography family="FasterOne" data-testid="text">
        hello
      </Typography>
    );

    expect(getByTestId("text")).toHaveTextContent("hello");
    // @ts-ignore
    expect(getByTestId("text")).toHaveStyleRule(
      "font-family",
      '"Faster One",cursive'
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test basic render with family='Monofett'", async () => {
    const { container, getByTestId } = render(
      <Typography family="Monofett" data-testid="text">
        hello
      </Typography>
    );

    expect(getByTestId("text")).toHaveTextContent("hello");
    // @ts-ignore
    expect(getByTestId("text")).toHaveStyleRule(
      "font-family",
      '"Monofett",cursive'
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test basic render with family='PressStart2P'", async () => {
    const { container, getByTestId } = render(
      <Typography family="PressStart2P" data-testid="text">
        hello
      </Typography>
    );

    expect(getByTestId("text")).toHaveTextContent("hello");
    // @ts-ignore
    expect(getByTestId("text")).toHaveStyleRule(
      "font-family",
      '"Press Start 2P",cursive'
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test basic render with color='blue'", async () => {
    const { container } = render(
      <Typography color='blue' data-testid="text">
        hello
      </Typography>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test basic render with color='yellow'", async () => {
    const { container, getByTestId } = render(
      <Typography color='yellow' data-testid="text">
        hello
      </Typography>
    );

    expect(getByTestId("text")).toHaveTextContent("hello");
    expect(container.firstChild).toMatchSnapshot();
  });
});


