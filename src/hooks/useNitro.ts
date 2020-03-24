import { useState, useCallback, useRef, useEffect } from "react";
import { useStep } from "./useStep";

export function useNitro() {
  const {
    next,
    previous,
    step,
    setStep
  } = useStep(0, 11);

  let intervalId = useRef(0);

  const [isActive, setActive] = useState(false)

  const active = useCallback(() => {
    if (step >= 10) {
      setActive(true);
      intervalId.current = setInterval(previous, 500)
    }
  }, [previous, step])


  const stop = useCallback(() => {
    setActive(false);
    clearInterval(intervalId.current)
  }, [])

  const charge = useCallback(()=> {
    if (step < 11) {
      next()
    }
  }, [next, step])

  const reset = useCallback(() => {
    setStep(0)
  }, [setStep])

  useEffect(() => {
    if (isActive && step === 0) {
      stop()
    }
  }, [step, isActive, stop])


  return {
    isActive,
    active,
    value: step,
    stop,
    charge,
    reset
  }
}
