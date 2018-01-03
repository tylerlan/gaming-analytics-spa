// NOTE: This initial state is really only useful for development purposes.
// For users, they should see loaders instead of this default data.

// const initialState = {
//   ui: {
//     currentSection: 'M',
//     currentMetric: 'coinIn',
//     currentDateRange: ['2017/12/17', '2017/12/17'],
//     navMobileStatus: false
//   },
//   data: {
//     pupd: {
//       dates: ['2017/12/17'],
//       metrics: {
//         coinIn: { '2017/12/17': 100 },
//         handlePulls: { '2017/12/17': 100 },
//         netWin: { '2017/12/17': 100 },
//         actualHoldPercent: { '2017/12/17': 100 },
//         theoHoldPercent: { '2017/12/17': 100 }
//       }
//     },
//     aggr: {
//       dates: ['2017/12/17'],
//       metrics: {
//         coinIn: { '2017/12/17': 100 },
//         coinOut: { '2017/12/17': 100 },
//         jackpots: { '2017/12/17': 100 },
//         handlePulls: { '2017/12/17': 100 },
//         netWin: { '2017/12/17': 100 },
//         theoWin: { '2017/12/17': 100 }
//       }
//     },
//     mfgmix: {
//       dateRange: { from: '2017/12/17', to: '2017/12/17' },
//       records: [
//         {
//           mfg: 'AINS',
//           coinIn: 10,
//           handlePulls: 10,
//           netWin: 10,
//           theoWin: 10,
//           machineDays: 10,
//           coinInPerc: '10',
//           handlePullsPerc: '10',
//           netWinPerc: '10',
//           theoWinPerc: '10',
//           machineDaysPerc: '10'
//         }
//       ]
//     }
//   }
// };

const initialState = {
  ui: {
    currentSection: '',
    currentMetric: '',
    currentDateRange: [],
    navMobileStatus: false
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
      dateRange: {},
      records: []
    }
  }
};

export default initialState;
