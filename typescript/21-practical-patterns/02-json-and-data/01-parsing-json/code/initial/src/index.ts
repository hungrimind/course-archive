type Product = { name: string; price: number };

export function parseProduct(json: string): Product {

}

export function safeParseProduct(json: string): Product | null {

}

const raw = '{"name": "Laptop", "price": 999}';
const product = parseProduct(raw);
console.log(product.name);
console.log(product.price);

const valid = safeParseProduct('{"name": "Phone", "price": 699}');
console.log(valid);

const invalid = safeParseProduct('{"name": true}');
console.log(invalid);

const broken = safeParseProduct("not json");
console.log(broken);
