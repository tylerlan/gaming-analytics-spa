import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EnhancedDataTable from '../data-table/enhanced-data-table';

class DataTableDrilldown extends Component {
  render() {
    const {
      mfgmixRecords,
      mfgmixDateRange,
      currentDateRange,
      onSelectDateRange
    } = this.props;

    return (
      <EnhancedDataTable
        inputData={mfgmixRecords}
        dateRange={mfgmixDateRange || currentDateRange}
        selectDateRange={onSelectDateRange}
      />
    );
  }
}

DataTableDrilldown.propTypes = {
  mfgmixRecords: PropTypes.arrayOf(
    PropTypes.shape({
      mfg: PropTypes.string.isRequired,
      coinIn: PropTypes.number.isRequired,
      handlePulls: PropTypes.number.isRequired,
      netWin: PropTypes.number.isRequired,
      theoWin: PropTypes.number.isRequired,
      machineDays: PropTypes.number.isRequired,
      coinInPerc: PropTypes.string.isRequired,
      handlePullsPerc: PropTypes.string.isRequired,
      netWinPerc: PropTypes.string.isRequired,
      theoWinPerc: PropTypes.string.isRequired,
      machineDaysPerc: PropTypes.string.isRequired
    })
  ).isRequired,
  mfgmixDateRange: PropTypes.shape({
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired
  }).isRequired,
  currentDateRange: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectDateRange: PropTypes.func.isRequired
};

export default DataTableDrilldown;
