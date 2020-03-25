import React from "react";

/**
 * Types
 */
type useKeyboardProps = {
  onKeypress(e: KeyboardEvent): void;
};

/**
 * Hook
 */
const useKeyboard = (props: useKeyboardProps) => {
  React.useEffect(() => {
    window.addEventListener("keydown", props.onKeypress, true);

    return () => {
      window.removeEventListener("keydown", props.onKeypress, true);
    };
  }, [props.onKeypress]);

  return;
};

export default useKeyboard;
