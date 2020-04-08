import {ImageModel} from './image.model';

export class ProductModel
{
  id: number;
  name: string;
  description: string;
  price: number;
  images: ImageModel[];
  quantity: number;
}
