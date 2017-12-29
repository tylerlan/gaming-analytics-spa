import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DataTableDrilldown from './data-table-drilldown';
import { onSelectDateRange } from '../../redux/actions/thunks';

export const mapStateToProps = state => {
  const mfgmixRecords = state.data.mfgmix.records;
  const mfgmixDateRange = state.data.mfgmix.dateRange;
  const currentSection = state.ui.currentSection;
  const currentMetric = state.ui.currentMetric;
  const currentDateRange = state.ui.currentDateRange;

  return {
    mfgmixRecords,
    mfgmixDateRange,
    currentSection,
    currentMetric,
    currentDateRange
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onSelectDateRange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DataTableDrilldown);
