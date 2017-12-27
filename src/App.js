import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import NavBar from './components/nav-bar/nav-bar-container';
import ComponentSwitch from './components/component-switch/component-switch-container';
import MetricsOfTheDay from './components/daily-stats/daily-stats-container';
import GraphDrilldown from './components/graph-drilldown/graph-drilldown-container';
import TableDrilldown from './components/table-drilldown/table-drilldown-container';

/* FOR TABLE */
// import SearchBar from './components/search-bar/search-bar-container';
// import DatePicker from './components/date-picker/date-picker-container';

/* FOR GRAPH */
// import MetricSelector from './components/metric-selector/metric-selector-container';
// import DateRangeSelector from './components/date-range-selector/date-range-selector-container';
// import LineChart from './components/charts/line-chart/line-chart-container';

const componentMap = {
  M: MetricsOfTheDay
  G: GraphDrilldown,
  T: TableDrilldown
};

const App = () => (
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

export default App;
