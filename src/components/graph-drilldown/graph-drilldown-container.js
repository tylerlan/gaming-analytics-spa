import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GraphDrilldown from './graph-drilldown';
import { onChangeSection, onSelectDateRange } from '../../redux/actions/thunks';

export const mapStateToProps = state => {
  const aggrMetrics = state.data.aggr.metrics;
  const aggrDates = state.data.aggr.dates;
  const currentSection = state.ui.currentSection;
  const currentMetric = state.ui.currentMetric;
  const currentDateRange = state.ui.currentDateRange;

  return {
    aggrMetrics,
    aggrDates,
    currentSection,
    currentMetric,
    currentDateRange
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onChangeSection,
      onSelectDateRange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GraphDrilldown);
