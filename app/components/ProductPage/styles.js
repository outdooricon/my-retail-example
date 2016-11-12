import styled from 'styled-components';

const desktopBreakpoint = '701px';

export const Container = styled.div`
  margin: 2rem 15%;
  @media (min-width: ${desktopBreakpoint}) {
    margin: 2rem  5% 3rem 5%;
  }
`;

export const LeftColumn = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
    clear: left;
    float: left;
    padding-right: 2rem;
    width: 50%
  }
`;

export const RightColumn = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
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

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: normal;
  margin: .1rem 0 .67rem;
  text-align: center;
`;

export const TitleImagesContainer = styled.div`
  padding: 0 4rem;
`;
