import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import * as moment from 'moment';

import AppHeader from '../app-header/app-header-container';
import NavBar from '../nav-bar/nav-bar-container';
import ComponentSwitch from '../component-switch/component-switch-container';

import MetricsOfTheDay from '../daily-stats/daily-stats-container';
import GraphDrilldown from '../graph-drilldown/graph-drilldown-container';
import DataTableDrilldown from '../data-table-drilldown/data-table-drilldown-container';

/* FOR TABLE */
// import SearchBar from '../search-bar/search-bar-container';
// import DatePicker from '../date-picker/date-picker-container';

/* FOR GRAPH */
// import DateRangeSelector from '../date-range-selector/date-range-selector-container';

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
    height: '100%',
    overfloow: 'scroll',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
});

class Home extends Component {
  async componentDidMount() {
    // let today = moment().format('YYYY/MM/DD');
    let today = '2017/12/17'; // the API does not currently support later dates than this
    let threeMonthsAgo = moment()
      .subtract(3, 'months')
      .format('YYYY/MM/DD');

    const {
      onSelectDateRange,
      getPerUnitPerDay,
      getAggregatePerDay,
      getManufactureBreakdown
    } = this.props;

    // Get data from the last 3 months
    await getPerUnitPerDay([threeMonthsAgo, today]);
    await getAggregatePerDay([threeMonthsAgo, today]);
    await getManufactureBreakdown([threeMonthsAgo, today]);

    // Update selected range
    await onSelectDateRange([threeMonthsAgo, today]);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppHeader classes={classes} />
          <NavBar classes={classes} />
          <main className={classes.content}>
            <ComponentSwitch components={componentMap} />
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getPerUnitPerDay: PropTypes.func.isRequired,
  getAggregatePerDay: PropTypes.func.isRequired,
  onSelectDateRange: PropTypes.func.isRequired,
  getManufactureBreakdown: PropTypes.func.isRequired
};

export default withStyles(styles)(Home);
