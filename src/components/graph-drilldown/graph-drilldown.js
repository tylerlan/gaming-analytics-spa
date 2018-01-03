import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import EchartsLineGraph from '../echarts/echarts-line-graph';
import DatePicker from '../date-picker/date-picker-container';

const graphDrilldownStyles = theme => ({
  datePicker: {
    marginLeft: '30%'
  }
});

class GraphDrilldown extends Component {
  constructor(props) {
    super(props);

    this.generateSeries = this.generateSeries.bind(this);
  }

  objectOfArraysOfData(objectOfObjects) {
    let valuesArrayByMetric = {};

    Object.keys(objectOfObjects).forEach(metricName => {
      valuesArrayByMetric[metricName] = Object.keys(
        objectOfObjects[metricName]
      ).map(key => objectOfObjects[metricName][key]);
    });

    return valuesArrayByMetric;
  }

  generateSelectedMetricsLegend(metrics, currentMetric) {
    let selectedMetrics = {};

    // if there's no metric selected, select them all!
    metrics.forEach(metric => {
      selectedMetrics[metric] = currentMetric ? metric === currentMetric : true;
    });

    return selectedMetrics;
  }

  generateSeries(metrics) {
    return Object.keys(metrics).map(metricName => {
      return {
        name: metricName,
        type: 'line',
        symbolSize: 8,
        hoverAnimation: false,
        data: metrics[metricName]
      };
    });
  }

  render() {
    const {
      classes,
      aggrMetrics,
      aggrDates,
      currentMetric,
      currentDateRange
    } = this.props;

    const metricsLegend = Object.keys(aggrMetrics);
    const metricsArrays = this.objectOfArraysOfData(aggrMetrics);
    const metricsSeries = this.generateSeries(metricsArrays);
    const timeData = aggrDates;
    const selectedMetrics = this.generateSelectedMetricsLegend(
      metricsLegend,
      currentMetric
    );

    return !metricsSeries.length ? (
      <div>Loading...</div>
    ) : (
      <div>
        <EchartsLineGraph
          legendData={metricsLegend}
          timeData={timeData}
          seriesData={metricsSeries}
          legendItemsSelected={selectedMetrics}
          chartTitle={currentMetric || 'all'}
          chartSubtitle={`From ${currentDateRange[0]} to ${
            currentDateRange[1]
          }`}
        />
        <div className={classes.datePicker}>
          <DatePicker />
        </div>
      </div>
    );
  }
}

GraphDrilldown.propTypes = {
  aggrMetrics: PropTypes.shape({
    dates: PropTypes.arrayOf(PropTypes.string),
    metrics: PropTypes.shape({
      coinIn: PropTypes.object,
      coinOut: PropTypes.object,
      jackpots: PropTypes.object,
      handlePulls: PropTypes.object,
      netWin: PropTypes.object,
      theoWin: PropTypes.object
    })
  }).isRequired,
  aggrDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentMetric: PropTypes.string,
  currentDateRange: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(graphDrilldownStyles)(GraphDrilldown);
