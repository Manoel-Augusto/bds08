import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};
const PieChartCard = ({ labels, name, series }: Props) => {
  return (
    <div className="pay-chart-card">
      <div className="text-container">
        <h1>R$ 746.484,00</h1>
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
