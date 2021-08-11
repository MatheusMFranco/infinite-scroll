import { renderHook } from '@testing-library/react-hooks';
import { useStorage } from './useStorage';

describe('Custom Hooks', () => {
  expect.assertions(1);
  it('useStorage', () => {
    const key = 'test';
    const content = 'any content';
    renderHook(() => useStorage(key, content));
    expect(JSON.parse(localStorage.getItem(key))).toEqual(content);
  });

  afterAll(() => localStorage.removeItem('test'));
});
