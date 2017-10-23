import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {TextPill} from "../atomes/TextPill";
import {WeatherIcon} from "../atomes/WeatherIcon";

const Container = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  padding: 0 10px;
  justify-content: space-around;
  border-left: 1px solid rgba(38, 38, 38, 0.5);
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const TempText = styled.span`
  color: white;
  font-family: OpenSans;
  font-size: ${props => `${props.size || 1}rem`}
`;

export const BigTempDay = ({day, weather, temp}) =>
  <Container>
    <Column>
      <TempText size={4}>82°</TempText>
      <TextPill>MONDAY 27th</TextPill>
    </Column>
    <Column>
      <WeatherIcon size={5} icon={"sunny"}/>
      <TempText>4mph / 67°</TempText>
    </Column>
  </Container>;
