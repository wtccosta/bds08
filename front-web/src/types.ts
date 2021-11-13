
export type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type Store = {
  id: number;
  name: string;
}

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  storeId?: number;
};

export type SalesByGender =  {
  gender: Gender;
  sum: number;
}

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

