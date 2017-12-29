import _ from 'underscore';
import React from 'react';
import PropTypes from 'prop-types';

const ComponentSwitch = ({ selected, components }) => {
  // If if the current list of components doesn't have the specified key then bail
  if (!components || !_.contains(_.keys(components), selected)) return null;

  let SelectedComponent = components[selected];

  return <SelectedComponent />;
};

ComponentSwitch.propTypes = {
  selected: PropTypes.string.isRequired,
  components: PropTypes.shape({
    M: PropTypes.func.isRequired,
    G: PropTypes.func.isRequired,
    T: PropTypes.func.isRequired
  }).isRequired
};

export default ComponentSwitch;
