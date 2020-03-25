import { useState, useCallback } from "react";

function useStep(initial: number, total?: number) {
  const [step, setStep] = useState(initial);

  const next = useCallback(() => {
    total ? setStep(i => (i < total - 1 ? i + 1 : i)) : setStep(i => i + 1);
  }, [total]);

  const previous = useCallback(() => setStep(i => (i > 0 ? i - 1 : i)), []);

  return {
    step,
    next,
    previous,
    setStep
  };
}

export default useStep;
