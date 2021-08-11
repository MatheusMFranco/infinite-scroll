import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 2rem;
    margin: 5rem auto;
    width: 80%;
    max-width: 128rem;
    min-width: 50rem;
    border: 0.1rem solid ${theme.colors.primary};
  `}
`;
