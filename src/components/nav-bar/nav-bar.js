import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

import HomeIcon from 'material-ui-icons/Home';
import ChartIcon from 'material-ui-icons/ShowChart';
import ListIcon from 'material-ui-icons/ViewList';

const sections = [
  { key: 'M', label: 'Metrics Of The Day', icon: HomeIcon },
  { key: 'G', label: 'Aggregated Metrics', icon: ChartIcon },
  { key: 'T', label: 'Manufacturer Mix', icon: ListIcon }
];

const NavBar = ({
  classes,
  section,
  onChangeSection,
  navDrawerToggle,
  navMobileStatus
}) => {
  const NavList = (
    <List dense>
      {sections.map(sec => (
        <ListItem
          button
          key={sec.key}
          onClick={() => {
            onChangeSection(sec.key);
            if (navMobileStatus === true) {
              navDrawerToggle(navMobileStatus);
            }
          }}
          className={sec.key === section ? 'section-selected' : null}
          style={{ paddingLeft: '8px', paddingRight: '8px' }}
        >
          <IconButton disableRipple={true}>
            <sec.icon />
          </IconButton>
          <ListItemText primary={sec.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          type="temporary"
          anchor={'left'}
          open={navMobileStatus}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={() => navDrawerToggle(navMobileStatus)}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {NavList}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          type="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {NavList}
        </Drawer>
      </Hidden>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  section: PropTypes.string.isRequired,
  onChangeSection: PropTypes.func.isRequired,
  navDrawerToggle: PropTypes.func.isRequired,
  navMobileStatus: PropTypes.bool.isRequired
};

export default NavBar;
