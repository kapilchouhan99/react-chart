import React from "react";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Category, BarSeries
} from '@syncfusion/ej2-react-charts';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.selectedRows

    return (
      <ChartComponent
        primaryXAxis={{
          valueType: "Category",
          title: "Users"
        }}
        primaryYAxis={{
          title: "Number"
        }}
      >
        <Inject services={[BarSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='name' yName='number' type='Bar'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
  }
}

export default Chart;
