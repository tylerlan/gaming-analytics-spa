import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import {
  onSelectDateRange,
  getPerUnitPerDay,
  getAggregatePerDay,
  getManufactureBreakdown
} from '../../redux/actions/thunks';

const mapStateToProps = state => {
  return {
    section: state.ui.currentSection || 'M'
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
