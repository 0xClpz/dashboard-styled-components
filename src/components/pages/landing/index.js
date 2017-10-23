import React from 'react';

import {Container} from '../../dumb/atomes/Container';
import {Footer} from "../../dumb/molecules/Footer";
import {CityTitle} from "../../dumb/molecules/CityTitle";
import {TempDay} from "../../dumb/molecules/TempDay";
import {BigTempDay} from "../../dumb/molecules/BigTempDay";
import {Meteo} from "../../dumb/molecules/Meteo";

const data = [
  {
    day: 'monday',
    temp: 19,
    weather: 'cloudy'
  },
  {
    day: 'tuesday',
    temp: 19,
    weather: 'cloudy'
  },

  {
    day: 'wednesday',
    temp: 19,
    weather: 'cloudy'
  },

  {
    day: 'thursday',
    temp: 16,
    weather: 'rain'
  },

  {
    day: 'friday',
    temp: 20,
    weather: 'sunny'
  },

  {
    day: 'saturday',
    temp: 19,
    weather: 'rain'
  },

  {
    day: 'sunday',
    temp: 24,
    weather: 'sunny'
  },
];

export const Landing = () => {
  return (
    <Container>
      <CityTitle city={"Bucharest"} countryCode={"ro"} />
      <Footer>
        <Meteo data={data}/>
      </Footer>
    </Container>
  )
};
