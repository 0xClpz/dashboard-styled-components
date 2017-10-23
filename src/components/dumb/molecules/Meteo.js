import React from 'react';
import PropTypes from 'prop-types';
import {Aux} from "../atomes/Aux";
import {BigTempDay} from "./BigTempDay";
import {TempDay} from "./TempDay";

export const Meteo = ({data}) =>
  <Aux>
    <BigTempDay data={data[0]}/>
    {data.slice(1, data.length).map((day, i) => <TempDay key={i} {...day}/>)};
  </Aux>;

Meteo.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.oneOf(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
    temp: PropTypes.number,
    weather: PropTypes.oneOf(['sunny', 'cloudy', 'rain'])
  })),
};
