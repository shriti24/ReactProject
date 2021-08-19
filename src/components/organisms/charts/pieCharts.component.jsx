/* eslint-disable import/no-named-default */
import React from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import { PieChart } from '@amcharts/amcharts4/charts';
import { default as am4themesAnimated } from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themesAnimated);
am4core.options.commercialLicense = true;

class PieCharts extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderPie = this.renderPie.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    if (data) {
      this.renderPie();
    }
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data !== data) {
      if (data) {
        this.renderPie();
      }
    }
  }

  renderPie() {
    const { id, config } = this.props;
    let { data } = this.props;
    data = data.data;
    am4core.createFromConfig(
      {
        data,
        series: [
          {
            type: 'PieSeries',
            dataFields: config,
            ticks: {
              disabled: true,
            },
            labels: {
              disabled: true,
            },
            slices: {
              propertyFields: {
                fill: 'color',
              },
            },
          },
        ],
        legend: {
          type: 'Legend',
          maxHeight: 200,
          scrollable: true,
          useDefaultMarker: true,
          position: 'left',
        },
      },
      `pie-${id}`,
      PieChart
    );
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <div id={`pie-${id}`} />
      </div>
    );
  }
}

export default PieCharts;

PieCharts.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
};
