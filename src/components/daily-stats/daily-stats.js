import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Grid from 'material-ui/Grid';
import DailyStatCard from '../daily-stat-card/daily-stat-card-container';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden'
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

// const MetricsOfTheDay = ({ todaysMetrics, mostRecentDayWithData, classes }) => {
//   return !todaysMetrics || !mostRecentDayWithData ? (
//     <div>Loading...</div>
//   ) : (
//     <div>
//       <h3>Averages Per Unit</h3>
//       <p>showing data from: {mostRecentDayWithData}</p>
//       <GridList className={classes.gridList} cols={2.5}>
//         {Object.keys(todaysMetrics).map((metric, index) => (
//           <GridListTile key={index}>
//             <DailyStatCard metric={metric} value={todaysMetrics[metric]} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// };

const MetricsOfTheDay = ({ todaysMetrics, mostRecentDayWithData, classes }) => {
  return !todaysMetrics || !mostRecentDayWithData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h3>Averages Per Unit</h3>
      <p>showing data from: {mostRecentDayWithData}</p>
      <div className={classes.root}>
        <GridList cols={2.5}>
          {Object.keys(todaysMetrics).map((metric, index) => (
            <GridListTile key={index}>
              <DailyStatCard metric={metric} value={todaysMetrics[metric]} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

MetricsOfTheDay.propTypes = {
  todaysMetrics: PropTypes.shape({
    coinIn: PropTypes.number,
    netWin: PropTypes.number,
    handlePulls: PropTypes.number,
    actualHoldPercent: PropTypes.number,
    theoHoldPercent: PropTypes.number
  }).isRequired,
  mostRecentDayWithData: PropTypes.string.isRequired
};

export default withStyles(styles)(MetricsOfTheDay);
