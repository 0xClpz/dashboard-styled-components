import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {TextPill} from "../atomes/TextPill";
import {WeatherIcon} from "../atomes/WeatherIcon";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10px;
  justify-content: space-around;
  border-left: 1px solid rgba(38, 38, 38, 0.5);
  align-items: center;
`;

const TempText = styled.span`
  color: white;
  font-family: OpenSans;
`;

export const TempDay = ({day, weather, temp}) =>
  <Container>
    <TextPill>{day}</TextPill>
    <WeatherIcon icon={weather} />
    <TempText>{temp}°</TempText>
  </Container>;
