import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

class EchartsLineGraph extends Component {
  render() {
    const {
      legendData,
      timeData,
      seriesData,
      legendItemsSelected,
      chartTitle,
      chartSubtitle
    } = this.props;

    const option = {
      title: {
        text: chartTitle,
        subtext: chartSubtitle
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      legend: {
        data: legendData,
        selected: legendItemsSelected
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      axisPointer: {
        link: { xAxisIndex: 'all' }
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 25
        },
        {
          start: 0,
          end: 25,
          handleIcon:
            'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '60%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }
      ],
      xAxis: [
        {
          gridIndex: 0,
          type: 'category',
          boundaryGap: false,
          axisLine: { onZero: true },
          data: timeData
        }
      ],
      yAxis: [
        {
          name: '',
          type: 'value',
          position: 'right'
        }
      ],
      series: seriesData
    };

    return (
      <div>
        <ReactEcharts option={option} notMerge={true} lazyUpdate={true} />
      </div>
    );
  }
}

{
  /* <ReactEcharts
  option={options}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict} /> */
}

export default EchartsLineGraph;
