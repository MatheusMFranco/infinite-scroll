import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import mock from './mock';
import { InfiniteScroll } from '.';

describe('<InfiniteScroll />', () => {
  beforeEach(() => {
    window.IntersectionObserver = mock;
  });

  it('should render one div', () => {
    expect.assertions(1);
    const fn = jest.fn();
    const { container } = renderTheme(<InfiniteScroll showMore={fn} />);
    expect(container.querySelectorAll('div')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = renderTheme(<InfiniteScroll showMore={fn} />);
    expect(container).toMatchSnapshot();
  });
});
