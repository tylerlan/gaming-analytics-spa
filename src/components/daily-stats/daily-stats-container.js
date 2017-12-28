import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MetricsOfTheDay from './daily-stats';
import { onChangeSection } from '../../redux/actions/thunks';

import * as moment from 'moment';

function getMetricsFromToday(dates, metrics) {
  let today = moment().format('YYYY/MM/DD');

  let mostRecentDayWithData = dates.includes(today)
    ? today
    : dates[dates.length - 1];

  const todaysMetrics = {};
  // reutrns an object of objects with each metric and its value for today (provided it's in the store)
  Object.keys(metrics).forEach(metric => {
    let value = metrics[metric][mostRecentDayWithData];
    todaysMetrics[metric] = value;
  });
  return todaysMetrics;
}

export const mapStateToProps = state => {
  const pupdMetrics = state.data.pupd.metrics;
  const pupdDates = state.data.pupd.dates;
  const mostRecentDayWithData = pupdDates[pupdDates.length - 1];
  const todaysMetrics = getMetricsFromToday(pupdDates, pupdMetrics);

  return {
    todaysMetrics,
    mostRecentDayWithData
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onChangeSection
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MetricsOfTheDay);
