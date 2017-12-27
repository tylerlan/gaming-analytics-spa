import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MetricsOfTheDay from './daily-stats';
import { onChangeSection } from '../../redux/actions/thunks';

import * as moment from 'moment';
let today = moment().format('YYYY/MM/DD');

function getMetricsFromToday(metrics) {
  // reutrns an array of objects with each metric and its value for today (provided it's in the store)
  return Object.keys(metrics).map(metric => {
    return { [metric]: metric[today] };
  });
}

const mapStateToProps = state => {
  return {
    section: state.ui.currentSection || 'M',
    // state.data.pupd.date.includes(today) ? 'Good' : 'Need to make an API call and update everything'
    pupdMetrics: state.data.pupd.metrics
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
