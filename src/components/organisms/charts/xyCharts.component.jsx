import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import { XYChart } from '@amcharts/amcharts4/charts';
// eslint-disable-next-line import/no-named-default
import { default as am4themesAnimated } from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themesAnimated);
am4core.options.commercialLicense = true;

class xyCharts extends Component {
  constructor() {
    super();
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount() {
    const { xyChartsData } = this.props;
    if (xyChartsData.data) {
      this.renderChart();
    }
  }

  componentDidUpdate(prevProps) {
    const { id, xyChartsData, multiValueTooltip } = this.props;

    const equalsData =
      prevProps.xyChartsData.data.length === xyChartsData.data.length &&
      xyChartsData.data.every((e, i) => e === prevProps.xyChartsData.data[i]);
    if (prevProps.id !== id || !equalsData || prevProps.multiValueTooltip !== multiValueTooltip) {
      this.renderChart();
    }
  }

  renderChart() {
    const { id, xyChartsData, multiValueTooltip } = this.props;
    const { data, categoryX, TitleX, TitleY } = xyChartsData;

    if (multiValueTooltip) {
      for (let i = 0; i < xyChartsData.series.length; i += 1) {
        xyChartsData.series[i].tooltip = {
          getFillFromObject: false,
          background: { fill: '#fff' },
          label: { fill: '#000' },
        };
        xyChartsData.series[i].adapter = {
          tooltipText() {
            let text = '[bold]{categoryX}[/]\n';
            xyChartsData.series.forEach((item) => {
              if (item.type === 'LineSeries') {
                text += `[${item.stroke}]●[/] ${item.name} : {${item.dataFields.valueY}}\n`;
              } else if (item.type === 'ColumnSeries') {
                text += `[${item.columns.fill}]●[/] ${item.name} : {${item.dataFields.valueY}}\n`;
              }
            });
            return text;
          },
        };
      }
    }

    am4core.createFromConfig(
      {
        legend: {
          markers: {
            width: 15,
            height: 15,
          },
          position: 'bottom',
        },
        data,
        series: xyChartsData.series,
        cursor: {
          maxTooltipDistance: -1,
          lineX: {
            stroke: '#82CAFF',
            strokeWidth: 2,
            strokeOpacity: 0.5,
            strokeDasharray: '',
          },
          lineY: {
            stroke: '#82CAFF',
            strokeWidth: 2,
            strokeOpacity: 0.5,
            strokeDasharray: '',
          },
        },
        xAxes: [
          {
            type: 'CategoryAxis',
            title: {
              text: TitleX,
            },
            renderer: {
              minGridDistance: 20,
              labels: {
                tooltipText: '{category}',
              },
            },
            dataFields: {
              category: categoryX,
            },
            events: {
              sizechanged(ev) {
                const axis = ev.target;
                const cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
                if (cellWidth < 40 && cellWidth > 30) {
                  axis.renderer.labels.template.rotation = -45;
                  axis.renderer.labels.template.horizontalCenter = 'right';
                  axis.renderer.labels.template.verticalCenter = 'top';
                  axis.renderer.labels.template.maxWidth = 100;
                } else if (cellWidth < 30) {
                  axis.renderer.labels.template.rotation = -90;
                  axis.renderer.labels.template.horizontalCenter = 'right';
                  axis.renderer.labels.template.verticalCenter = 'middle';
                  axis.renderer.labels.template.maxWidth = 100;
                } else {
                  axis.renderer.labels.template.rotation = 0;
                  axis.renderer.labels.template.horizontalCenter = 'middle';
                  axis.renderer.labels.template.verticalCenter = 'top';
                  axis.renderer.labels.template.maxWidth = cellWidth;
                }
              },
            },
          },
        ],
        yAxes: [
          {
            type: 'ValueAxis',
            title: {
              text: TitleY,
            },
          },
        ],
      },
      `xy-${id}`,
      XYChart
    );
  }

  render() {
    const { id } = this.props;
    return <div id={`xy-${id}`} />;
  }
}

export default xyCharts;

xyCharts.propTypes = {
  id: PropTypes.string.isRequired,
  xyChartsData: PropTypes.object,
};

xyCharts.defaultProps = {
  xyChartsData: {},
};
