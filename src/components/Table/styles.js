import styled, { css } from 'styled-components';

export const Container = styled.table`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.primary};
    border-collapse: collapse;
    width: 100%;
    tr {
      border: 0.1rem solid ${theme.colors.primary};
      transition: all 500ms ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: ${theme.colors.highlight};
      }
      td {
        padding: 0 1rem;
        &:first-child,
        &:last-child {
          width: 3rem;
        }
        img {
          padding-top: 0.3rem;
          color: ${theme.colors.primary};
        }
      }
    }
    .active {
      background-color: ${theme.colors.highlight};
    }
  `}
`;
