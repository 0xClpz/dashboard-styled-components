import styled from 'styled-components';
import PropTypes from 'prop-types';

export const DivOverflow = styled.div`
  position: absolute;
  height: 25vh;
  max-height: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: ${(props) => props.value};
  color: ${(props) => {
    console.log(props);
  }}
`;

DivOverflow.propTypes = {
  value: PropTypes.oneOf(['hidden', 'visible', 'scroll', 'auto', 'initial']).isRequired
};
