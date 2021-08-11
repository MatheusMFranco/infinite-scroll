import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Table } from '.';
import { renderTheme } from '../../utils/render-theme';

import mock from './mock.js';

describe('<Table />', () => {
  it('should render lines', () => {
    expect.assertions(1);
    renderTheme(<Table data={mock.data} />);
    expect(screen.getAllByRole('row')).toHaveLength(mock.data.length);
  });

  it('should active line', () => {
    expect.assertions(1);
    renderTheme(<Table data={mock.data} />);
    const line = screen.getAllByRole('row')[2];
    userEvent.click(line);
    expect(line).toHaveAttribute('class', 'active');
  });

  it('should activate just one line', () => {
    expect.assertions(3);
    renderTheme(<Table data={mock.data} />);
    const line = screen.getAllByRole('row')[0];
    userEvent.click(line);
    expect(line).toHaveAttribute('class', 'active');
    const secondLine = screen.getAllByRole('row')[50];
    userEvent.click(secondLine);
    expect(line).not.toHaveAttribute('class', 'active');
    expect(secondLine).toHaveAttribute('class', 'active');
  });

  it('should render four cells', () => {
    expect.assertions(5);
    const { container } = renderTheme(<Table data={mock.data} />);
    const row = container.firstChild
      .querySelectorAll('tr')[0]
      .querySelectorAll('td');
    expect(row).toHaveLength(4);
    expect(row[0]).toContainElement(screen.getAllByRole('img')[0]);
    expect(row[1].textContent).toBe('e906859036f847e68e58a577da9312a2');
    expect(row[2].textContent).toBe('item-0');
    expect(+row[3].textContent).toBe(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Table data={mock.data} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
