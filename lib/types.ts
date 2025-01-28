export interface Product {
  id: number;
  name: string;
  price: number;
  image: string | null;
}

export interface ProductsPageProps {
  products: Product[];
}