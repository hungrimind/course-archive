export function createProduct() {
  return { name: "Widget", price: 9.99, inStock: true };
}

export type Product = ReturnType<typeof createProduct>;

export function formatProduct(product: Product): string {
  return `${product.name} - $${product.price}`;
}

const product = createProduct();
console.log(formatProduct(product));
