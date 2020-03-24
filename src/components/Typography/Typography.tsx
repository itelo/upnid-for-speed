import React from "react";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";

type TypographyProps = {
  family: "FasterOne" | "Monofett" | "PressStart2P";
  color: "yellow" | "blue";
  children: React.ReactNode;
} & MotionProps &
  React.HTMLAttributes<HTMLParagraphElement>;

const TypographyStyled = styled(motion.p)<TypographyProps>`
  ${({ family }) => {
    if (family === "FasterOne") {
      return 'font-family: "Faster One", cursive;';
    }
    if (family === "Monofett") {
      return 'font-family: "Monofett", cursive;';
    }

    return 'font-family: "Press Start 2P", cursive;';
  }}
  ${({ color }) => {
    if (color === "blue") {
      return "color: rgb(86, 117, 184);";
    } else {
      return "color: rgb(234, 199, 133);";
    }
  }}
  
  font-size: 4.5rem;
  text-align: center;
  margin: 0;
`;

const Typography = (props: TypographyProps) => {
  return <TypographyStyled {...props} />;
};

Typography.defaultProps = {
  family: 'FasterOne',
  color: 'yellow'
};

export default Typography;
