import React from "react";
import { motion } from "framer-motion";
import rockImg from "../../assets/rock.png";
import lightningImg from "../../assets/lightning-bolt.png";
import styled from "styled-components";

type ObjectData = {
  key: string;
  type: "rock" | "lightning";
  y: number;
};

type ObjectInRoadAssetProps = {
  size: number;
  matrix: { x: number; y: number; scale: number }[][];
  onAnimationComplete: (obj: ObjectData, index: number) => () => void;
  index: number;
  obj: ObjectData;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ObjectImgStyled = styled(motion.img)<{
  size: number;
}>`
  top: ${({ size }) => (size * 38)/100}px;
  left: ${({ size }) => (size - (size * 28)/100) / 2 - (size * 2)/100}px;
  height: ${({ size }) => (size * 28)/100}px;
  width: ${({ size }) => (size * 28)/100}px;
  position: absolute;
`;

const ObjectInRoadAsset = (props: ObjectInRoadAssetProps) => {
  return (
    <ObjectImgStyled
      size={props.size}
      alt={props.obj.type}
      animate={{
        translateX: props.matrix[2 - props.index][props.obj.y].x * props.size,
        translateY: props.matrix[props.index][props.obj.y].y * props.size * -1,
        scale: props.matrix[2 - props.index][props.obj.y].scale,
        transition: {
          ease: "easeInOut"
        }
      }}
      data-testid="obj-img"
      style={{ scale: 0.18 }}
      onAnimationComplete={props.onAnimationComplete(props.obj, props.index)}
      src={props.obj.type === "rock" ? rockImg : lightningImg}
    />
  );
};

ObjectInRoadAsset.defaultProps = {};

export default ObjectInRoadAsset;
