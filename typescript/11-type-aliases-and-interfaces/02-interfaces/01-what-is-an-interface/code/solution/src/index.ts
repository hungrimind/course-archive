export interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

export function formatProduct(product: Product): string {
  return `Name: ${product.name}, Price: $${product.price}, In Stock: ${product.inStock ? "Yes" : "No"}`;
}

console.log(formatProduct({ name: "TypeScript Guide", price: 29, inStock: true }));