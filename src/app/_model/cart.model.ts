
export class CartModel
{
  products: Map<number, number>;
  // products: {};

  constructor() {
    this.products = new Map<number, number>();
  }
}
