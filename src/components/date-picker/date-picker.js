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

    // NOTE: NEED TO STANDARDIZE HOW DATE RANGE IS REPRESENTED IN THE APP AND STORE
    // Right now it's either {from: '2017/10/10' to: '2017/11/10'}
    // or it's ['2017/10/10', '2017/11/10']
    const { currentFromDate, currentToDate } = this.state;

    let dateRange = [currentFromDate, currentToDate];

    try {
      await this.props.onSelectDateRange(dateRange);
      await this.props.getPerUnitPerDay(dateRange);
    } catch (e) {
      console.log('something went wrong:', e);
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
