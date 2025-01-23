export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ProductsPageProps {
  products: Product[];
}