import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import * as moment from 'moment';

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

class Home extends Component {
  async componentDidMount() {
    let today = moment().format('YYYY/MM/DD');
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
    return (
      <div style={{ backgroundColor: '#eee', height: '100%' }}>
        <Grid container spacing={0} alignItems="stretch">
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={0}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <NavBar />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ flex: 1 }}>
            <Paper style={{ height: '100%', padding: '20px' }}>
              <ComponentSwitch components={componentMap} />
            </Paper>
          </Grid>
        </Grid>
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

export default Home;
