import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ObjectInRoadAsset from "./ObjectInRoadAsset";
import { matrix } from "../../screens/Game/utils";
import "jest-styled-components";

describe("<CarAsset />", () => {
  const leftPosition = [0, 0] as [number, number];
  const middlePosition = [1, 0] as [number, number];
  const rightPosition = [2, 0] as [number, number];

  const objLightning = {
    y: 0,
    key: "lightning",
    type: "lightning" as "lightning"
  };

  const objRock = {
    y: 0,
    key: "rock",
    type: "rock" as "rock"
  };

  it("test basic render of lightning", async () => {
    const onAnimationComplete = jest.fn();

    const { getByTestId, container } = render(
      <ObjectInRoadAsset
        index={0}
        size={100}
        matrix={matrix}
        obj={objLightning}
        onAnimationComplete={() => onAnimationComplete()}
      />
    );

    const element = getByTestId("obj-img");

    await waitFor(() =>
      expect(element).toHaveStyle(
        "transform: translateX(-35px) translateY(30px) scale(1) translateZ(0);"
      )
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test if the onAnimationComplete is called", async () => {
    const onAnimationComplete = jest.fn();

    const { getByTestId, rerender, container } = render(
      <ObjectInRoadAsset
        index={1}
        size={100}
        matrix={matrix}
        obj={objLightning}
        onAnimationComplete={() => onAnimationComplete()}
      />
    );

    const element = getByTestId("obj-img");

    await waitFor(() =>
      expect(element).toHaveStyle(
        "transform: translateX(-20px) translateY(10px) scale(0.55) translateZ(0);"
      )
    );

    rerender(
      <ObjectInRoadAsset
        index={0}
        size={100}
        matrix={matrix}
        obj={objLightning}
        onAnimationComplete={() => onAnimationComplete()}
      />
    );

    await waitFor(() =>
      expect(element).toHaveStyle(
        "transform: translateX(-35px) translateY(30px) scale(1) translateZ(0);"
      )
    );

    expect(onAnimationComplete).toHaveBeenCalledTimes(2);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test basic render of rock", async () => {
    const onAnimationComplete = jest.fn();

    const { getByTestId, container } = render(
      <ObjectInRoadAsset
        index={0}
        size={100}
        matrix={matrix}
        obj={objRock}
        onAnimationComplete={() => onAnimationComplete()}
      />
    );

    const element = getByTestId("obj-img");

    await waitFor(() =>
      expect(element).toHaveStyle(
        "transform: translateX(-35px) translateY(30px) scale(1) translateZ(0);"
      )
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("test if the onAnimationComplete is called", async () => {
    const onAnimationComplete = jest.fn();

    const { getByTestId, rerender, container } = render(
      <ObjectInRoadAsset
        index={1}
        size={100}
        matrix={matrix}
        obj={objRock}
        onAnimationComplete={() => onAnimationComplete()}
      />
    );

    const element = getByTestId("obj-img");

    await waitFor(() =>
      expect(element).toHaveStyle(
        "transform: translateX(-20px) translateY(10px) scale(0.55) translateZ(0);"
      )
    );

    rerender(
      <ObjectInRoadAsset
        index={0}
        size={100}
        matrix={matrix}
        obj={objRock}
        onAnimationComplete={() => onAnimationComplete()}
      />
    );

    await waitFor(() =>
      expect(element).toHaveStyle(
        "transform: translateX(-35px) translateY(30px) scale(1) translateZ(0);"
      )
    );

    expect(onAnimationComplete).toHaveBeenCalledTimes(2);
    expect(container.firstChild).toMatchSnapshot();
  });
});
