import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CarAsset from "./CarAsset";
import "jest-styled-components";

describe("<CarAsset />", () => {
  const matrix = [
    [
      { x: -1, y: -1, scale: -1 },
      { x: 0.5, y: 0.5, scale: 0.5 },
      { x: 1.2, y: 1.2, scale: 1.2 }
    ]
  ] as { x: number; y: number; scale: number }[][];
  const leftPosition = [0, 0] as [number, number];
  const middlePosition = [1, 0] as [number, number];
  const rightPosition = [2, 0] as [number, number];

  it("test basic render at middle", async () => {
    const { getByTestId } = render(
      <CarAsset size={100} matrix={matrix} position={middlePosition} />
    );

    const element = getByTestId("car-asset");

    await waitFor(() =>
      expect(element).toHaveStyle("transform: translateX(50px) translateY(50px) scale(0.5) translateZ(0);")
    );
  });

  it("test basic render at left", async () => {
    const { getByTestId } = render(
      <CarAsset size={100} matrix={matrix} position={leftPosition} />
    );

    const element = getByTestId("car-asset");

    await waitFor(() =>
      expect(element).toHaveStyle("transform: translateX(-100px) translateY(-100px) scale(-1) translateZ(0);")
    );
  });

  it("test basic render at right", async () => {
    const { getByTestId } = render(
      <CarAsset size={100} matrix={matrix} position={rightPosition} />
    );

    const element = getByTestId("car-asset");

    await waitFor(() =>
      expect(element).toHaveStyle("transform: translateX(120px) translateY(120px) scale(1.2) translateZ(0);")
    );
  });

  it("test snapshot", () => {
    const { container } = render(
      <CarAsset size={100} matrix={matrix} position={middlePosition} />
    );

    expect(container.firstChild).toMatchSnapshot()
  })
});