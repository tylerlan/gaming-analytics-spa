import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import DatePicker from '../date-picker/date-picker-container';

const toolbarStyles = theme => ({
  root: {
    paddingRight: 2
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.A700,
          backgroundColor: theme.palette.secondary.A100
        }
      : {
          color: theme.palette.secondary.A100,
          backgroundColor: theme.palette.secondary.A700
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
});

const EnhancedDataTableToolbar = ({
  numSelected,
  classes,
  value,
  handleSearch,
  dateRange
}) => (
  <div>
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <Typography type="title" color="inherit" className={classes.flex}>
        Manufacturers Mix
      </Typography>
    </Toolbar>
    <Toolbar>
      <DatePicker />
    </Toolbar>
    <Toolbar>
      <TextField placeholder="Search" onChange={handleSearch} value={value} />
    </Toolbar>
  </div>
);

EnhancedDataTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.number,
  handleSearch: PropTypes.func.isRequired
};

export default withStyles(toolbarStyles)(EnhancedDataTableToolbar);
