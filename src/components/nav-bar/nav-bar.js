import React from 'react';

import IconButton from 'material-ui/IconButton';
import List, { ListItem } from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';
import { withStyles } from 'material-ui/styles';

import HomeIcon from 'material-ui-icons/Home';
import ChartIcon from 'material-ui-icons/ShowChart';
import PowerIcon from 'material-ui-icons/Power';
import ListIcon from 'material-ui-icons/ViewList';

const sections = [
  { key: 'M', label: 'Metrics Of The Day', icon: HomeIcon },
  { key: 'G', label: 'Graph Of Recent', icon: ChartIcon },
  { key: 'T', label: 'Table of Recent', icon: ListIcon }
];

const styles = theme => ({
  listItem: {
    root: {
      background: theme.palette.grey.a400,
      paddingLeft: '8px',
      paddingRight: '8px'
    }
  }
});

const NavBar = ({ section, onChangeSection }) => (
  <List dense>
    {sections.map(sec => (
      <ListItem
        button
        key={sec.key}
        onClick={e => onChangeSection(sec.key)}
        className={sec.key === section ? 'section-selected' : null}
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <Tooltip title={sec.label} placement="right">
          <IconButton disableRipple={true}>
            <sec.icon />
          </IconButton>
        </Tooltip>
      </ListItem>
    ))}
  </List>
);

// NavBar.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   searchTerm: PropTypes.string.isRequired,
// };

export default withStyles(styles)(NavBar);
