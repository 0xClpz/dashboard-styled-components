import React from 'react';
import {PrimaryTitle} from "../atomes/PrimaryTitle";
import {DarkTitle} from "../atomes/DarkTitle";
import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: 30px;
`;

export const CityTitle = ({city, countryCode}) => {
  const firstChars = city.slice(0, 4);
  const rest = `${city.slice(4, city.length)}, ${countryCode.toUpperCase()}`;
  return (
    <TitleContainer>
      <PrimaryTitle>{firstChars}</PrimaryTitle>
      <DarkTitle>{rest}</DarkTitle>
    </TitleContainer>
  )
};
