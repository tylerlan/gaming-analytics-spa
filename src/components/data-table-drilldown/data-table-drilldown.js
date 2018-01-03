import React from 'react';
import PropTypes from 'prop-types';
import EnhancedDataTable from '../data-table/enhanced-data-table';

const DataTableDrilldown = ({
  mfgmixRecords,
  mfgmixDateRange,
  currentDateRange,
  onSelectDateRange
}) => {
  return !mfgmixRecords.length ? (
    <div>Loading...</div>
  ) : (
    <EnhancedDataTable
      inputData={mfgmixRecords}
      dateRange={mfgmixDateRange || currentDateRange}
    />
  );
};

DataTableDrilldown.propTypes = {
  mfgmixRecords: PropTypes.arrayOf(
    PropTypes.shape({
      mfg: PropTypes.string,
      coinIn: PropTypes.number,
      handlePulls: PropTypes.number,
      netWin: PropTypes.number,
      theoWin: PropTypes.number,
      machineDays: PropTypes.number,
      coinInPerc: PropTypes.string,
      handlePullsPerc: PropTypes.string,
      netWinPerc: PropTypes.string,
      theoWinPerc: PropTypes.string,
      machineDaysPerc: PropTypes.string
    })
  ).isRequired,
  mfgmixDateRange: PropTypes.shape({
    to: PropTypes.string,
    from: PropTypes.string
  }).isRequired,
  currentDateRange: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectDateRange: PropTypes.func.isRequired
};

export default DataTableDrilldown;
