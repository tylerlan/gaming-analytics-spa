import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import * as moment from 'moment';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

export class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFromDate: this.props.dateRange[0],
      currentToDate: this.props.dateRange[1]
    };
  }

  handleChangeFromDate = (event, date) => {
    event.preventDefault();
    date = moment(event.target.value).format('YYYY/MM/DD');

    this.setState({
      currentFromDate: date
    });
  };

  handleChangeToDate = (event, date) => {
    event.preventDefault();
    date = moment(event.target.value).format('YYYY/MM/DD');

    this.setState({
      currentToDate: date
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();

    // NOTE: IT'S WORTH CONSIDERING WHETHER TO MAKE state.data.mfgmix.dateRange A TUPLE, LIKE state.ui.currentDateRange
    // state.data.mfgmix.dateRange is organized like so: {from: '2017/10/10' to: '2017/11/10'}
    // state.ui.currentDateRange is organized like so: ['2017/10/10', '2017/11/10']
    // It doesn't really matter in this context
    const { currentFromDate, currentToDate } = this.state;

    let dateRange = [currentFromDate, currentToDate];

    try {
      await this.props.onSelectDateRange(dateRange);
      await this.props.getPerUnitPerDay(dateRange);
      await this.props.getAggregatePerDay(dateRange);
      await this.props.getManufactureBreakdown(dateRange);
    } catch (e) {
      console.error('something went wrong:', e);
    }
  };

  render() {
    const { classes, dateRange } = this.props;

    return (
      <form className={classes.container} onSubmit={this.handleFormSubmit}>
        <TextField
          id="date"
          label="From"
          type="date"
          onChange={this.handleChangeFromDate}
          defaultValue={moment(this.state.currentFromDate).format('YYYY-MM-DD')}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="date"
          label="To"
          type="date"
          onChange={this.handleChangeToDate}
          defaultValue={moment(this.state.currentToDate).format('YYYY-MM-DD')}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatePicker);
