import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import EnhancedDataTableHead from './enhanced-data-table-head';
import EnhancedDataTableToolbar from './enhanced-data-table-toolbar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 800
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});

class EnhancedDataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      searchValue: '',
      data: this.props.inputData,
      filterData: this.props.inputData,
      page: 0,
      rowsPerPage: 5
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const filterData =
      order === 'desc'
        ? this.state.filterData.sort(
            (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
          )
        : this.state.filterData.sort(
            (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
          );

    this.setState({ filterData, order, orderBy });
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleSearch = event => {
    const { data } = this.state;
    let filteredDatas = [];
    filteredDatas = data.filter(e => {
      let mathesItems = Object.values(e);
      let retVal = true;
      mathesItems.forEach(e => {
        const regex = new RegExp(event.target.value, 'gi');
        if (typeof e === 'string') retVal = e.match(regex);
      });
      return retVal;
    });
    this.setState({
      filterData: filteredDatas,
      searchValue: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const {
      filterData,
      order,
      orderBy,
      selected,
      rowsPerPage,
      page
    } = this.state;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, filterData.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedDataTableToolbar
          numSelected={selected.length}
          handleSearch={this.handleSearch}
          value={this.searchValue}
        />
        <div className={classes.tableWrapper}>
          <Table>
            <EnhancedDataTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={filterData.length}
            />
            <TableBody>
              {filterData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      onKeyDown={event => this.handleKeyDown(event, n.id)}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell>{n.mfg}</TableCell>
                      <TableCell numeric>{n.coinIn}</TableCell>
                      <TableCell numeric>{n.handlePulls}</TableCell>
                      <TableCell numeric>{n.netWin}</TableCell>
                      <TableCell numeric>{n.theoWin}</TableCell>
                      <TableCell numeric>{n.machineDays}</TableCell>
                      <TableCell numeric>{n.coinInPerc}</TableCell>
                      <TableCell numeric>{n.handlePullsPerc}</TableCell>
                      <TableCell numeric>{n.netWinPerc}</TableCell>
                      <TableCell numeric>{n.theoWinPerc}</TableCell>
                      <TableCell numeric>{n.machineDaysPerc}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={filterData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

EnhancedDataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  inputData: PropTypes.arrayOf(
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
  ).isRequired
};

export default withStyles(styles)(EnhancedDataTable);
