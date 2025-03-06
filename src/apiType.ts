export interface Product {
  id: number;
  title: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
}

export type ProductArray = Product[];

export interface CartTypes {
  id: string;
  userId: string;
  date: string
  products: []
}

export type CartArray = CartTypes[];