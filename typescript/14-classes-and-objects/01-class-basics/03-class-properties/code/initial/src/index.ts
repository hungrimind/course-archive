export class Product {

  constructor(title: string, price: number) {

  }
}

const product = new Product("Wireless Keyboard", 49.99);
console.log(`${product.title} costs $${product.price}, in stock: ${product.inStock}`);
