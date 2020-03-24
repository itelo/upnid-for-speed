import React from "react";
import styled from "styled-components";
import { Button, Typography } from "../../components";
import { SizeContext } from "../../context";

type PauseScreenProps = {
  onClickContinue: ArgumentTypes<typeof Button>[number]["onClick"];
  onClickExit?: Required<ArgumentTypes<typeof Button>[number]>["onClick"];
  buttonLabel2?: string;
  title: string;
  buttonLabel: string;
  message?: string;
};

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

type BackgroundScreen = {
  size: number;
};

const BackgroundScreen = styled.div<BackgroundScreen>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: black;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
`;

const ContinerContainer = styled.div`
  flex-direction: column;
  position: absolute;
  top: calc(50% - 2.25rem);
  left: calc(50% - (333px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageContainer = styled.div`
  margin: 128px 0;
`;

const PauseScreen = (props: PauseScreenProps) => {
  const { size } = React.useContext(SizeContext);
  return (
    <BackgroundScreen size={size}>
      <Typography family="FasterOne" color="blue">
        {props.title}
      </Typography>
      {props.message && (
        <MessageContainer>
          <Typography family="PressStart2P" color="yellow">
            {props.message}
          </Typography>
        </MessageContainer>
      )}
      <ContinerContainer>
        <Button onClick={props.onClickContinue}>
          <Typography family="Monofett" color="yellow">
            {props.buttonLabel}
          </Typography>
        </Button>
        {!!props.buttonLabel2 && (
          <Button onClick={props.onClickExit}>
            <Typography family="Monofett" color="yellow">
              {props.buttonLabel2}
            </Typography>
          </Button>
        )}
      </ContinerContainer>
    </BackgroundScreen>
  );
};

PauseScreen.defaultProps = {};

export default PauseScreen;
