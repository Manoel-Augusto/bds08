import Filter from 'components/filter';
import Header from 'components/header';
import PieChartCard from 'components/pie-chart-card';
import { buildSalesByGenderChart, sumSalesByGender } from 'helpers';
import { useEffect, useMemo, useState } from 'react';
import { FilterStore, PieChartConfig, SalesByGender } from 'types';
import { buildFilterParams, makeRequest } from 'utils/request';

function App() {
  const [filterStore, setFilterStore] = useState<FilterStore>();

  const params = useMemo(() => buildFilterParams(filterStore), [filterStore]);

  const [genderByStore, setGenderByStore] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);
  const onFilterChange = (filter: FilterStore) => {
    setFilterStore(filter);
  };

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);

        setGenderByStore(newSalesByGender);
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })

      .catch(() => {
        console.error('Error to fetch sales');
      });
  }, [params]);

  return (
    <div className="App">
      <Header />
      <Filter onFilterChange={onFilterChange} />
      <PieChartCard
        totalSum={totalSum}
        name=""
        labels={['Masculino', 'Feminino', 'Outros']}
        series={genderByStore?.series}
      />
    </div>
  );
}

export default App;
