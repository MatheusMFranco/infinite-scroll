import { useEffect, useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { useStorage } from '../../utils/hooks/useStorage';

export const Table = ({ data = [] }) => {
  const [activatedLine, setActivatedLine] = useStorage('lineActivated', null);

  const activateLine = (line) => {
    setActivatedLine(line);
  };

  return (
    <Styled.Container>
      <tbody>
        {data.map((item) => (
          <tr
            className={activatedLine === item.id ? 'active' : ''}
            key={item.absoluteIndex}
            onClick={() => activateLine(item.id)}
          >
            <td>
              <img src="assets/icons/file.svg" alt="📁" aria-label="icon" />
            </td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.absoluteIndex}</td>
          </tr>
        ))}
      </tbody>
    </Styled.Container>
  );
};

Table.propTypes = {
  data: P.arrayOf(
    P.shape({
      id: P.string.isRequired,
      name: P.string.isRequired,
      absoluteIndex: P.number.isRequired,
    }),
  ),
};
