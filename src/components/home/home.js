import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppHeader from '../app-header/app-header-container';
import NavBar from '../nav-bar/nav-bar-container';
import ComponentSwitch from '../component-switch/component-switch-container';

import MetricsOfTheDay from '../daily-stats/daily-stats-container';
import GraphDrilldown from '../graph-drilldown/graph-drilldown-container';
import DataTableDrilldown from '../data-table-drilldown/data-table-drilldown-container';

const componentMap = {
  M: MetricsOfTheDay,
  G: GraphDrilldown,
  T: DataTableDrilldown
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'scroll'
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    overfloow: 'scroll',
    padding: theme.spacing.unit * 3,
    height: '100%',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
});

const Home = ({ classes }) => (
  <div className={classes.root} style={{ margin: '0px' }}>
    <div className={classes.appFrame}>
      <AppHeader classes={classes} />
      <NavBar classes={classes} />
      <main className={classes.content}>
        <ComponentSwitch components={componentMap} />
      </main>
    </div>
  </div>
);
Home.propTypes = {
  getPerUnitPerDay: PropTypes.func.isRequired,
  getAggregatePerDay: PropTypes.func.isRequired,
  onSelectDateRange: PropTypes.func.isRequired,
  getManufactureBreakdown: PropTypes.func.isRequired
};

export default withStyles(styles)(Home);
