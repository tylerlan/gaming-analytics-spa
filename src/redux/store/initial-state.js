import * as moment from 'moment';
let now = moment().format('YYYY/MM/DD');
let threeMonthsAgo = moment()
  .subtract(3, 'months')
  .format('YYYY/MM/DD');

const initialState = {
  ui: {
    currentSection: 'M',
    currentMetric: '',
    currentDateRange: [threeMonthsAgo, now],
    searchTerm: '',
    dataLoaded: false
  },
  data: {
    pupd: {
      dates: [],
      metrics: {}
    },
    aggr: {
      dates: [],
      metrics: {}
    },
    mfgmix: {
      dateRange: [],
      companies: {}
    }
  }
};

export default initialState;
