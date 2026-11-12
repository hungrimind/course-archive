export class Product {
  title: string;
  price: number;
  inStock: boolean;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
    this.inStock = true;
  }
}

const product = new Product("Wireless Keyboard", 49.99);
console.log(`${product.title} costs $${product.price}, in stock: ${product.inStock}`);
