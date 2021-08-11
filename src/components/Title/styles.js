import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-align: center;
    padding-bottom: 1rem;
    font-size: 4.2rem;
  `}
`;
