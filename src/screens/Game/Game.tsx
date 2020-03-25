import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import roadGif from "../../assets/road.gif";
import { useStep, useKeyboard } from "../../hooks";
import CounterScreen from "../CounterScreen/CounterScreen";
import { useNitro } from "../../hooks/useNitro";
import PauseScreen from "../PauseScreen/PauseScreen";
import {
  CarAsset,
  ObjectInRoadAsset,
  Typography,
  Nitro,
  Button
} from "../../components";
import { generateRoad, matrix, getNewPos } from "./utils";
import { SizeContext } from "../../context";

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

type GameProps = {
  onClickExit: ArgumentTypes<typeof Button>[number]["onClick"];
  username: string;
};

const initialCarPos = [1, matrix.length - 1] as [number, number];

const Game = (props: GameProps) => {
  const [carPosition, setT] = React.useState(initialCarPos);
  const [pointsCounter, setPointsCounter] = React.useState(0);
  const nitro = useNitro();

  const { step, setStep, next: nextStep } = useStep(1, 3);

  const [posR, setPosR] = React.useState(generateRoad(20));

  const { size } = React.useContext(SizeContext);

  const handleKeypress = React.useCallback(
    (e: KeyboardEvent) => {
      if (step === 1) {
        if (e.key === "a" || e.key === "ArrowLeft") {
          setT(getNewPos(carPosition, "left"));
        }

        if (e.key === "d" || e.key === "ArrowRight") {
          setT(getNewPos(carPosition, "right"));
        }

        if (e.key === "s" || e.key === "ArrowDown") {
          setT(getNewPos(carPosition, "down"));
        }

        if (e.key === "w" || e.key === "ArrowUp") {
          setT(getNewPos(carPosition, "up"));
        }

        if (e.key === "Escape") {
          setStep(2);
        }

        if (e.code === "Space") {
          nitro.isActive ? nitro.stop() : nitro.active();
        }
      }
    },
    [step, carPosition, setStep, nitro]
  );

  useKeyboard({
    onKeypress: handleKeypress
  });

  React.useEffect(() => {
    const id = setInterval(
      () => {
        if (step === 1) {
          setPointsCounter(x => x + 1);
          setPosR(x => [...x.slice(1, x.length), ...x.slice(0, 1)]);
        }
      },
      nitro.isActive ? 200 : 400
    );

    return () => {
      clearInterval(id);
    };
  }, [step, nitro.isActive]);

  const handleFreshStart = () => {
    setT(initialCarPos);
    setPosR(generateRoad(20));
    setStep(0);
    nitro.reset();
    setPointsCounter(0);
  };

  const handleAnimationComplete = (
    element: {
      y: number;
      type: "rock" | "lightning";
    },
    index: number
  ) => () => {
    if (element.y === carPosition[0] && 2 - index === carPosition[1]) {
      if (element.type === "rock") {
        return setStep(3);
      }
      if (element.type === "lightning") {
        return nitro.charge();
      }
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", height: size, width: size }}>
          <Nitro value={nitro.value} />

          {step === 0 && <CounterScreen onFinish={() => nextStep()} />}
          {step === 2 && (
            <PauseScreen
              onClickContinue={() => setStep(0)}
              title="PAUSE"
              buttonLabel="CONTINUE"
            />
          )}
          {step === 3 && (
            <PauseScreen
              onClickExit={props.onClickExit}
              onClickContinue={handleFreshStart}
              title="YOU DIED"
              message={`${pointsCounter} points`}
              buttonLabel="TRY AGAIN"
              buttonLabel2="Exit"
            />
          )}

          <img
            alt="gif of road"
            src={roadGif}
            style={{
              height: size,
              width: size
            }}
          />
          <div style={{ position: "absolute", top: 25, right: 25 }}>
            <Typography
              family="PressStart2P"
              color="yellow"
              style={{ margin: "0.3rem 1rem", fontSize: "2rem" }}
            >
              {pointsCounter} <span style={{ fontSize: "2rem" }}>points</span>
            </Typography>
          </div>
          <div style={{ position: "absolute", top: 'calc(25px + 3rem)', right: 25 }}>
            <Typography
              family="PressStart2P"
              color="yellow"
              style={{ margin: "0.3rem 1rem", fontSize: "2rem" }}
            >
              {props.username}
            </Typography>
          </div>
          <CarAsset size={size} matrix={matrix} position={carPosition} />
          {posR.slice(0, 3).map((rockPos, i) => {
            if (rockPos.y === null) return null;
            return (
              <ObjectInRoadAsset
                key={rockPos.key}
                matrix={matrix}
                size={size}
                obj={rockPos}
                onAnimationComplete={handleAnimationComplete}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

Game.defaultProps = {};

export default Game;
