import {SubcategoryModel} from './subcategory.model';

export class CategoryModel
{
  id: number;
  name: string;
  subcategories: SubcategoryModel[];
}
