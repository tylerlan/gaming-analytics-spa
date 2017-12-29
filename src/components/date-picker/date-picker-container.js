import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from './date-picker';
import {
  getPerUnitPerDay,
  onSelectDateRange
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
      getPerUnitPerDay
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
