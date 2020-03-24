import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";

type CounterScreenProps = {
  onFinish: () => void;
};

const Text = styled(motion.p)`
  font-family: "Press Start 2P", cursive;
  font-size: 8rem;
  text-align: center;
  color: rgb(86, 117, 184);
  margin: 0;
`;

const CounterScreen = ({ onFinish }: CounterScreenProps) => {
  const { height: currentHeight, width: currentWidth } = useWindowSize();
  const size = currentWidth > currentHeight ? currentHeight : currentWidth;

  const [counter, setCounter] = React.useState(3);

  React.useEffect(() => {
    setTimeout(() => {
      if (counter === 0) {
        return onFinish();
      } else {
        return setCounter(currentCounter => currentCounter - 1);
      }
    }, 1000);
  }, [counter, onFinish]);

  const CounterJSX = ({ counter: currentCounter }: { counter: number }) => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
    >
      <Text>{currentCounter === 0 ? "GO" : currentCounter}</Text>
    </motion.div>
  );

  return (
    <div
      style={{
        height: size,
        width: size,
        backgroundColor: "black",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        top: 0,
        left: 0
      }}
    >
      <CounterJSX counter={counter} />
    </div>
  );
};

CounterScreen.defaultProps = {};

export default CounterScreen;
