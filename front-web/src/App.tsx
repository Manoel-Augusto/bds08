import Filter from 'components/filter';
import Header from 'components/header';
import PieChartCard from 'components/pie-chart-card';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <PieChartCard
        name=""
        labels={['Feminino', 'Masculino', 'Outro']}
        series={[40, 30, 30]}
      />
    </div>
  );
}

export default App;
