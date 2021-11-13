import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import { formatPrice } from '../../utils/formatters';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const total = (series: number[]) => {
  return series.reduce((total, series) => total + series, 0);
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <div className="label-area">
        <h2>{formatPrice(total(series))}</h2>
        <span>Total de vendas</span>
      </div>
      <div className="chart-area">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
