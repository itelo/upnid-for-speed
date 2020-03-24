import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useStep } from "./hooks/useStep";
import animationData from "./assets/car-lottie.json";
import Lottie from "react-lottie";
import { Game } from "./screens";
import { useWindowSize } from "./hooks/useWindowSize";
import { Button } from "./components";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Text = styled(motion.p)`
  font-family: "Faster One", cursive;
  font-size: 4rem;
  text-align: center;
  color: rgb(86, 117, 184);
  margin: 0;
`;

const TextGame = styled(motion.p)`
  font-family: "Monofett", cursive;
  font-size: 4rem;
  color: rgb(234, 199, 133);
  margin: 0;
`;

const InputGame = styled(motion.input)`
  font-family: "Press Start 2P", cursive;
  text-align: center;
  margin: 4rem 0;
  border: none;
  outline: none;
  font-size: 2rem;
  max-width: 300px;
`;

function App() {
  const { step, next, previous, setStep } = useStep(0, 3);
  const [username, setUsername] = React.useState("");

  const { height: currentHeight, width: currentWidth } = useWindowSize();
  const size = currentWidth > currentHeight ? currentHeight : currentWidth;

  const handleExitGame = () => {
    setUsername("");
    previous();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        overflow: "hidden",
        height: "100vh",
        position: "relative"
      }}
    >
      {step !== 2 && <Text>Upnid for speed</Text>}
      {step === 0 && (
        <Button autoFocus onClick={() => setStep(2)}>
          <TextGame>START</TextGame>
        </Button>
      )}
      {step !== 2 && (
        <div
          style={{
            position: "absolute",
            bottom: "-22vh"
          }}
        >
          <Lottie
            options={defaultOptions}
            height={size}
            width={size}
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
          />
        </div>
      )}
      {step === 1 && (
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(e);
            next();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <InputGame
            type="text"
            maxLength={5}
            autoFocus
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Your name"
          />
          <div>
            <Button type="submit">
              <TextGame>run</TextGame>
            </Button>
          </div>
        </form>
      )}
      {step === 2 && <Game onClickExit={handleExitGame} username={username} />}
    </div>
  );
}

export default App;
