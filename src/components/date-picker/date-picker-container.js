import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from './date-picker';
import {
  onSelectDateRange,
  getPerUnitPerDay,
  getAggregatePerDay,
  getManufactureBreakdown
} from '../../redux/actions/thunks';

const mapStateToProps = state => {
  return {
    dateRange: state.ui.currentDateRange
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onSelectDateRange,
      getPerUnitPerDay,
      getAggregatePerDay,
      getManufactureBreakdown
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
