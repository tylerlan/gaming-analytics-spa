import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EnhancedDataTable from '../data-table/enhanced-data-table';

class DataTableDrilldown extends Component {
  render() {
    const {
      mfgmixRecords,
      mfgmixDateRange,
      currentSection,
      currentMetric,
      currentDateRange
    } = this.props;

    return <EnhancedDataTable inputData={mfgmixRecords} />;
  }
}

export default DataTableDrilldown;
