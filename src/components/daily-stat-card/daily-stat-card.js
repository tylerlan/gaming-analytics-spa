import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
};

function applySymbols(metric, value) {
  // add commas
  value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const moneyMetrics = ['coinIn', 'coinOut', 'jackpots', 'netWin', 'theoWin'];
  const percentMetrics = ['actualHoldPercent', 'theoHoldPercent'];

  if (moneyMetrics.includes(metric)) return '$' + value;
  if (percentMetrics.includes(metric)) return value + '%';

  return value;
}

const DailyStatCard = ({ metric, value, onChangeSection, onSelectMetric }) => (
  <div
    className="DailyStatCard"
    style={{ cursor: 'pointer' }}
    onClick={async e => {
      await onChangeSection('G');
      await onSelectMetric(metric);
    }}
  >
    <Card>
      <CardContent>
        <Typography type="headline" component="h2">
          {applySymbols(metric, value)}
        </Typography>
        <Typography>{metric}</Typography>
      </CardContent>
    </Card>
  </div>
);
DailyStatCard.propTypes = {
  metric: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChangeSection: PropTypes.func.isRequired,
  onSelectMetric: PropTypes.func.isRequired
};

export default withStyles(styles)(DailyStatCard);
