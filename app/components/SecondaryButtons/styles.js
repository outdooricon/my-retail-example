import styled from 'styled-components';

export const Button = styled.button`
  background-color: #f3f3f3;
  border-radius: .3rem;
  font-size: .75rem;
  padding: .4rem;
  text-transform: uppercase
  width: 32%;

  &:hover {
    background-color: #cccccc;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
