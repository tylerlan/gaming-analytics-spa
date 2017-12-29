import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
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
    const { order, orderBy } = this.props;

    const columnData = [
      {
        id: 'mfg',
        numeric: false,
        label: 'Manufacturer'
      },
      {
        id: 'coinIn',
        numeric: true,
        label: 'Coin In Total'
      },
      {
        id: 'handlePulls',
        numeric: true,
        label: 'Handle Pulls Total'
      },
      { id: 'netWin', numeric: true, label: 'Net Win' },
      {
        id: 'theoWin',
        numeric: true,
        label: 'Theoretical Win'
      },
      {
        id: 'machineDays',
        numeric: true,
        label: 'Machine Days Total'
      },
      {
        id: 'coinInPerc',
        numeric: true,
        label: 'Coin In %'
      },
      {
        id: 'handlePullsPerc',
        numeric: true,
        label: 'Handle Pulls %'
      },
      {
        id: 'netWinPerc',
        numeric: true,
        label: 'Net Win %'
      },
      {
        id: 'theoWinPerc',
        numeric: true,
        label: 'Theoretical Win %'
      },
      {
        id: 'machineDaysPerc',
        numeric: true,
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
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
};

export default EnhancedDataTableHead;
