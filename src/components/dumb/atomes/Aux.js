import PropTypes from 'prop-types';

export const Aux = ({children}) => children;

Aux.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
