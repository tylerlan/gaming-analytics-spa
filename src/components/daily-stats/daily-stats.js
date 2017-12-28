import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import DailyStatCard from '../daily-stat-card/daily-stat-card-container';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary[200]
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});

const MetricsOfTheDay = ({ todaysMetrics, mostRecentDayWithData }) => (
  <div className={'MetricsOfTheDay'}>
    <h3>Averages Per Unit</h3>
    <p>showing data from: {mostRecentDayWithData}</p>
    <GridList cols={2.5}>
      {Object.keys(todaysMetrics).map(metric => (
        <GridListTile key={todaysMetrics[metric] + Math.random()}>
          <DailyStatCard metric={metric} value={todaysMetrics[metric]} />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

MetricsOfTheDay.propTypes = {
  todaysMetrics: PropTypes.shape({
    coinIn: PropTypes.number.isRequired,
    netWin: PropTypes.number.isRequired,
    handlePulls: PropTypes.number.isRequired,
    actualHoldPercent: PropTypes.number.isRequired,
    theoHoldPercent: PropTypes.number.isRequired
  }).isRequired,
  mostRecentDayWithData: PropTypes.string.isRequired
};

export default withStyles(styles)(MetricsOfTheDay);
