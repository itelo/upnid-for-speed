import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export const SizeContext = React.createContext({ size: 0 });

type SizeProviderProps = {
  children: React.ReactNode;
};

export const SizeProvider = (props: SizeProviderProps) => {
  const { height: currentHeight, width: currentWidth } = useWindowSize();
  const size = currentWidth > currentHeight ? currentHeight : currentWidth;

  return (
    <SizeContext.Provider value={{ size }}>
      {props.children}
    </SizeContext.Provider>
  );
};
