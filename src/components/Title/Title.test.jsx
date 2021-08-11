import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import { Title } from '.';

describe('<Title />', () => {
  it('should render', () => {
    expect.assertions(1);
    renderTheme(<Title>Children</Title>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Title>Legacy</Title>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
