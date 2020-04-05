import {ProductModel} from './products.model';

export class OpportunityModel
{
  id: number;
  promotionCode: string;
  quantity: number;
  product: ProductModel;
}
