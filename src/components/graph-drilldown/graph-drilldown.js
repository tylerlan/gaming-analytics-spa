import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EchartsLineGraph from '../echarts/echarts-line-graph';

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
      aggrMetrics,
      aggrDates,
      currentMetric,
      currentDateRange
    } = this.props;

    const metricsLegend = Object.keys(aggrMetrics);
    //
    const metricsArrays = this.objectOfArraysOfData(aggrMetrics);
    const metricsSeries = this.generateSeries(metricsArrays);
    //
    const timeData = aggrDates;
    //
    const selectedMetrics = this.generateSelectedMetricsLegend(
      metricsLegend,
      currentMetric
    );

    return (
      <div>
        <EchartsLineGraph
          legendData={metricsLegend}
          timeData={timeData}
          seriesData={metricsSeries}
          legendItemsSelected={selectedMetrics}
          chartTitle={currentMetric || 'all'}
          chartSubtitle={currentDateRange}
        />
      </div>
    );
  }
}

GraphDrilldown.propTypes = {
  aggrMetrics: PropTypes.shape({
    dates: PropTypes.string.isRequired,
    metrics: PropTypes.string.isRequired
  }),
  aggrDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentMetric: PropTypes.string,
  currentDateRange: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GraphDrilldown;
