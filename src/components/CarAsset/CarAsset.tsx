import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import carImg from "../../assets/car.png";

type CarAssetProps = {
  size: number;
  matrix: { x: number; y: number; scale: number }[][];
  position: [number, number];
} & React.ImgHTMLAttributes<HTMLImageElement>;

const CarAssetStyled = styled(motion.img)<{
  size: number;
}>`
  top: ${({ size }) => size * 0.7}px;
  left: ${({ size }) => (size - size * 0.28) / 2 - size * 0.02}px;
  height: ${({ size }) => size * 0.28}px;
  width: ${({ size }) => size * 0.28}px;
  position: absolute;
`;

const CarAsset = (props: CarAssetProps) => {
  return (
    <CarAssetStyled
      alt="car"
      size={props.size}
      animate={{
        translateX:
          props.matrix[props.position[1]][props.position[0]].x * props.size,
        translateY:
          props.matrix[props.position[1]][props.position[0]].y * props.size,
        scale: props.matrix[props.position[1]][props.position[0]].scale
      }}
      src={carImg}
    />
  );
};

CarAsset.defaultProps = {};

export default CarAsset;
