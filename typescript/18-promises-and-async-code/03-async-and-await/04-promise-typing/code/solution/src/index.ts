export interface Product {
  name: string;
  price: number;
}

export async function fetchProduct(name: string, price: number): Promise<Product> {
  return { name, price };
}

export async function getProductLabel(productPromise: Promise<Product>): Promise<string> {
  const product = await productPromise;
  return `${product.name} - $${product.price}`;
}
