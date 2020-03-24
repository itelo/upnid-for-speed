import React from "react";
import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const ButtonStyled = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;
  return <ButtonStyled {...buttonProps}>{props.children}</ButtonStyled>;
};

Button.defaultProps = {};

export default Button;
