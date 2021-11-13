import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { FilterData, PieChartConfig, SalesByGender, Store } from './types';
import { buildSalesByGendereChart } from './helpers';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [stores, setStores] = useState<Store[]>([]);
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores')
      .then((response) => {
        setStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch stores list');
      });
  }, []);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGenre = buildSalesByGendereChart(response.data);
        setSalesByGender(newSalesByGenre);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} stores={stores} />
        <PieChartCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </>
  );
}

export default App;
