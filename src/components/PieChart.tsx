import {Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
interface ChartProps {
    data: any; // Reemplaza 'any' con el tipo adecuado para tus datos de gráficos
    options: any; // Reemplaza 'any' con el tipo adecuado para tus opciones de gráficos
}

const ChartLine: React.FC<ChartProps> = ({ data, options}) => {
    console.log(data);
    //(options as any).scales.xAxes.ticks['color'] = 'white';
    //(options as any).scales.yAxes.ticks['color'] = 'white';

    return (
        <Pie data={data} options={options} />
    );


};

export default ChartLine;
