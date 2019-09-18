import { Headache } from '../app/models/Headache';

export const TYPE : Object = [
  {id: 1, name: "Strong"},
  {id: 2, name: "Medium"},
  {id: 3, name: "Light"}
];

export const HEADACHES: Headache[] = [
  { type: "strong", startDate: '2019-01-13', endDate: '2019-01-13', didTakeMedicine: true },
  { type: "medium", startDate: '2019-01-15', endDate: '2019-01-16', didTakeMedicine: false },
  { type: "light", startDate: '2019-01-12', endDate: '2019-01-17', didTakeMedicine: true },
];