import _ from 'underscore';
import React from 'react';

const ComponentSwitch = ({ selected, components }) => {
  // If if the current list of components doesn't have the specified key then bail
  if (!components || !_.contains(_.keys(components), selected)) return null;

  let SelectedComponent = components[selected];

  return <SelectedComponent />;
};

export default ComponentSwitch;
