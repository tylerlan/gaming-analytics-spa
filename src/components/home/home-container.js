import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import {
  onSelectDateRange,
  getPerUnitPerDay,
  getAggregatePerDay,
  getManufactureBreakdown
} from '../../redux/actions/thunks';
import * as moment from 'moment';

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

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// NOTE: What to do if today's date does not exist in the return form the Api? Should the UI approximate?
const onDidMount = lifecycle({
  async componentDidMount() {
    // let today = moment().format('YYYY/MM/DD');
    let today = '2017/12/17'; // the API does not currently support later dates than this
    let threeMonthsAgo = moment()
      .subtract(30, 'days')
      .format('YYYY/MM/DD');

    const {
      onSelectDateRange,
      getPerUnitPerDay,
      getAggregatePerDay,
      getManufactureBreakdown
    } = this.props;
    // Update selected range
    await onSelectDateRange([threeMonthsAgo, today]);

    // Get data from the last 3 months
    await getPerUnitPerDay([threeMonthsAgo, today]);
    await getAggregatePerDay([threeMonthsAgo, today]);
    await getManufactureBreakdown([threeMonthsAgo, today]);
  }
});

export default compose(connectToStore, onDidMount)(Home);
