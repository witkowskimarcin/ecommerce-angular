import {ProductModel} from './products.model';

export class SubcategoryModel
{
  id: number;
  name: string;
  products: ProductModel[];
}
