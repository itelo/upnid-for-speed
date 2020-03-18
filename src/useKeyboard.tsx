import React from "react";

// const c = 67;
// const h = 72;
// const j = 74;
// const k = 75;
// const l = 76;
// const shift = 16;

/**
 * Types
 */
type useKeyboardProps = {
    onKeypress(e: KeyboardEvent): void
};

/**
 * Hook
 */
const useKeyboard = (props: useKeyboardProps) => {
console.log({keypress: '12'})
  React.useEffect(() => {
    window.addEventListener("keydown", props.onKeypress, true);

    return () => {
      window.removeEventListener("keydown", props.onKeypress, true);
    };
  }, [props.onKeypress]);

  return;
};

export default useKeyboard;