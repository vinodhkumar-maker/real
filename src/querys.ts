import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CartArray, Product, ProductArray, userData, UserInformation } from './apiType';

interface FetchProductsResponse {
  data: ProductArray[];
  total: number;
}

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchProducts = async (
  page: number,
  pageSize: number
): Promise<FetchProductsResponse> => {
  const response = await axiosInstance.get<[Product][]>('/products', {
    params: {
      _page: page,
      _limit: pageSize,
    },
  });
  const total = parseInt(response.headers['x-total-count'], 10);
  return { data: response.data, total };
};

export const useProducts = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ['products', page, pageSize],
    queryFn: () => fetchProducts(page, pageSize),
  });
};


const baseURL = 'https://fakestoreapi.com/carts/5';

export const useFetchCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async (): Promise<CartArray> => {
      const res = await fetch(baseURL)
      const data = await res.json()
      return data
    }
  })
};
export const useUserInformation = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<UserInformation[]> => {
      return new Promise<UserInformation[]>((resolve) => {
        setTimeout(() => {
          resolve(userData);
        }, 1000); 
      });
    },
    
  });
};




