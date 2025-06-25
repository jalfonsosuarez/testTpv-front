export interface Products {
  count: number;
  pages: number;
  products: Product[];
}
export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}
