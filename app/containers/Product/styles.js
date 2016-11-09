import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 576px) {
    margin: 0 5%;
  }
`;

export const LeftColumn = styled.div`
  @media (min-width: 576px) {
    clear: left;
    float: left;
    padding-right: 1.25rem;
    width: 50%
  }
`;

export const RightColumn = styled.div`
  @media (min-width: 576px) {
    float: right;
    width: 50%
  }
`;

export const Price = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const PriceContainer = styled.div`
  margin-bottom: 2rem;
`;

export const PriceQualifier = styled.span`
  color: #808080;
  font-size: .75rem;
  margin-left: .5rem;
  text-transform: lowercase;
`;

export const PrimaryButton = styled.button`
  background-color: #cd0606;
  color: white;
  text-transform: uppercase
`;

export const SecondaryButton = styled.button`
  background-color: black;
  color: white;
  text-transform: uppercase
`;

export const TertiaryButton = styled.button`
  background-color: gray;
  text-transform: uppercase
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: normal;
  margin: .1rem 0 .67rem;
  text-align: center;
`;

export const TitleImagesContainer = styled.div`
  padding: 0 4rem;
`;
