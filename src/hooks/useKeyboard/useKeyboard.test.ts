import { renderHook } from '@testing-library/react-hooks'
import useKeyboard from './useKeyboard'
import { fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";

describe("useKeyboard()", () => {
  it('should press enter', () => {
    let keypressed = null;
    const onKeypress = (e: KeyboardEvent) => {
      keypressed = e.key;
    };
    renderHook(() => useKeyboard({
      onKeypress
    }))

    fireEvent.keyDown(window, { key: 'Enter', code: 13 })
  
    expect(keypressed).toBe('Enter');
  });
});