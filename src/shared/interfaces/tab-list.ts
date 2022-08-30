import { ICard } from './card';

export interface ITabList {
  title?: string;
  titleIcon?: string;
  list?: ICard[];
  textEmptyHeader?: string;
  textEmptyBody?: string;
}
