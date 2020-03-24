import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typography from "../Typography/Typography";

type NitroProps = {
  value: number;
};

const NitroBarContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  border: 5px solid black;
  width: 10rem;
  height: 2rem;
`;

const NitroBarContent = styled(motion.div)`
  background: blue;
  height: 100%;
`;

const Nitro = (props: NitroProps) => {
  return (
    <NitroBarContainer>
      <Typography style={{fontSize: '1.5rem', position: 'absolute', margin: '0.3rem 1rem'}} family="PressStart2P" color="yellow">Nitro</Typography>
      <NitroBarContent
        animate={{
          width: `${10 * props.value}%`
        }}
      />
    </NitroBarContainer>
  );
};

Nitro.defaultProps = {};

export default Nitro;
