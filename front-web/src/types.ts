export type Store = {
  id: number;
  name: string;
};

export type FilterStore = {
  store?: string;
};
export type GenderId = {
  id: number;
};
export type GenderConvert = {};

export type SalesByGender = {
  gender: string;
  sum: number;
};
export type PieChartConfig = {
  labels: string[];
  series: number[];
};
