import { renderHook, act } from '@testing-library/react';
import useTheme from './useTheme';
import { blackTheme, customTheme } from '../const';

describe('useTheme', () => {
  test('should render the initial theme', () => {
    const { result } = renderHook(useTheme);
    expect(result.current.theme).toBe(customTheme.light);
  });
  test('toggleTheme should change theme', () => {
    const { result } = renderHook(useTheme);
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe(customTheme.dark);
  });
  test('themesStyles should cast theme for proper CSS const', () => {
    const { result } = renderHook(useTheme);
    let styles;
    act(() => {
      styles = result.current.themesStyles(customTheme.dark);
    });
    expect(styles).toBe(blackTheme);
  });
});
