import { renderHook } from '@testing-library/react';
import useScreenSize from './useScreenSize';

describe('useScreenSize hook', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'innerWidth', { writable: true });
    Object.defineProperty(window, 'innerHeight', { writable: true });
  });

  it('should return the initial width and height of the window', () => {
    window.innerWidth = 1024;
    window.innerHeight = 768;

    const { result } = renderHook(() => useScreenSize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
    expect(result.current.mobile).toBe(false);
  });

  it('should update the size and mobile when the window is resized to a smaller screen', () => {
    window.innerWidth = 600;
    window.innerHeight = 800; // Simulate a resize event
    const event = new Event('resize');
    window.dispatchEvent(event);

    const { result } = renderHook(() => useScreenSize());

    expect(result.current.width).toBe(600);
    expect(result.current.height).toBe(800);
    expect(result.current.mobile).toBe(true);
  });

  it('should update the size and mobile when the window is resized to a larger screen', () => {
    window.innerWidth = 1200;
    window.innerHeight = 900; // Simulate another resize event
    const event = new Event('resize');
    window.dispatchEvent(event);

    const { result } = renderHook(() => useScreenSize());

    expect(result.current.width).toBe(1200);
    expect(result.current.height).toBe(900);
    expect(result.current.mobile).toBe(false);
  });
});
