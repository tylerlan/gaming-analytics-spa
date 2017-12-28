import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DailyStatCard from './daily-stat-card';
import { onChangeSection, onSelectMetric } from '../../redux/actions/thunks';

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onChangeSection,
      onSelectMetric
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(DailyStatCard);
