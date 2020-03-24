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
  top: ${({ size }) => size * 0.38}px;
  left: ${({ size }) => (size - size * 0.28) / 2 - size * 0.02}px;
  height: ${({ size }) => size * 0.28}px;
  width: ${({ size }) => size * 0.28}px;
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
      style={{ scale: 0.18 }}
      onAnimationComplete={props.onAnimationComplete(props.obj, props.index)}
      src={props.obj.type === "rock" ? rockImg : lightningImg}
    />
  );
};

ObjectInRoadAsset.defaultProps = {};

export default ObjectInRoadAsset;
