export interface Product {
  name: string;
  price: number;
}

export async function fetchProduct(name: string, price: number): Promise<Product> {
}

export async function getProductLabel(productPromise: Promise<Product>): Promise<string> {
}
