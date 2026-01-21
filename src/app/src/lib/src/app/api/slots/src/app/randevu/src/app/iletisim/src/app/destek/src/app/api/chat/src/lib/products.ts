export type Product = {
  id: string;
  brand: "Gano Excel" | "Oriflame" | "Herbalife";
  name: string;
  price: number;
  stock: number;
};

export const PRODUCTS: Product[] = [
  { id:"p1", brand:"Gano Excel", name:"Ürün 1 (örnek)", price: 999, stock: 10 },
  { id:"p2", brand:"Oriflame", name:"Ürün 2 (örnek)", price: 499, stock: 25 },
  { id:"p3", brand:"Herbalife", name:"Ürün 3 (örnek)", price: 1299, stock: 5 }
];
