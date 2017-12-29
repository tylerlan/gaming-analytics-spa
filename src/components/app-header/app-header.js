import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

const AppHeader = ({ classes, section, navMobileStatus, navDrawerToggle }) => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={() => navDrawerToggle(navMobileStatus)}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" noWrap>
          Gaming Analytics
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

AppHeader.propTypes = {
  section: PropTypes.string.isRequired,
  navDrawerToggle: PropTypes.func.isRequired
};

export default AppHeader;
