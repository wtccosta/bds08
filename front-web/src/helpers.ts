import { Gender, SalesByGender } from './types';

const formatGender = (gender: Gender) => {
  const textbyGender = {
    MALE: 'Masculilno',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };
  return textbyGender[gender];
};

export const buildSalesByGendereChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
