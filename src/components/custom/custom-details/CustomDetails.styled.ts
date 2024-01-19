import styled from 'styled-components';

export const CustomDetailsStyled = styled.details`
  border: 2px solid var(--main-font);
  border-radius: 4px;
  width: 80%;

  &__title {
    display: inline-block;
  }
`;

export const CustomSummaryStyled = styled.summary`
  padding: 1em;
  cursor: pointer;
  list-style: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const CustomDetailsContentStyled = styled.div`
  margin: 0 1em 1em;
`;
