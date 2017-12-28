import React, { Component } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Table, {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';

class EnhancedDataTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, numSelected, rowCount, inputData } = this.props;

    const columnData = [
      {
        id: 'mfg',
        numeric: false,
        disablePadding: false,
        label: 'Manufacturer'
      },
      {
        id: 'coinIn',
        numeric: true,
        disablePadding: false,
        label: 'Coin In Total'
      },
      {
        id: 'handlePulls',
        numeric: true,
        disablePadding: false,
        label: 'Handle Pulls Total'
      },
      { id: 'netWin', numeric: true, disablePadding: false, label: 'Net Win' },
      {
        id: 'theoWin',
        numeric: true,
        disablePadding: false,
        label: 'Theoretical Win'
      },
      {
        id: 'machineDays',
        numeric: true,
        disablePadding: false,
        label: 'Machine Days Total'
      },
      {
        id: 'coinInPerc',
        numeric: true,
        disablePadding: false,
        label: 'Coin In %'
      },
      {
        id: 'handlePullsPerc',
        numeric: true,
        disablePadding: false,
        label: 'Handle Pulls %'
      },
      {
        id: 'netWinPerc',
        numeric: true,
        disablePadding: false,
        label: 'Net Win %'
      },
      {
        id: 'theoWinPerc',
        numeric: true,
        disablePadding: false,
        label: 'Theoretical Win %'
      },
      {
        id: 'machineDaysPerc',
        numeric: true,
        disablePadding: false,
        label: 'Machine Days %'
      }
    ];

    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                disablePadding={column.disablePadding}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedDataTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export default EnhancedDataTableHead;
