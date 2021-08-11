import P from 'prop-types';
import * as Styled from './styles';

export const Title = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Title.propTypes = {
  children: P.node.isRequired,
};
