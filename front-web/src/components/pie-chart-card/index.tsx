import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

import { formatPrice } from 'utils/formatters';
import { FilterStore } from 'types';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  filterStore?: FilterStore;
  totalSum: number;
};
const PieChartCard = ({
  labels = [],
  name,
  series = [],
  filterStore,
  totalSum,
}: Props) => {
  return (
    <div className="pay-chart-card">
      <div className="text-container">
        {<h1> {formatPrice(totalSum)}</h1>}

        <h3>Total de vendas</h3>
      </div>
      <div className="pay-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="230"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
};
export default PieChartCard;
