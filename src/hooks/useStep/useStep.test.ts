import { renderHook, act } from '@testing-library/react-hooks'
import { useStep } from './index';

describe("useStep()", () => {
  it('should run useStep', () => {
    const { result } = renderHook(() => useStep(0, 2));

    act(() => {
      result.current.next();
    });
  
    expect(result.current.step).toBe(1);

    act(() => {
      result.current.next();
    });

    expect(result.current.step).toBe(1);

    act(() => {
      result.current.previous();
    });

    expect(result.current.step).toBe(0);


    act(() => {
      result.current.setStep(1);
    });

    expect(result.current.step).toBe(1);

    act(() => {
      result.current.setStep(2);
    });

    expect(result.current.step).toBe(2);
  });
});