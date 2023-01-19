import { useFetch } from './useFetch';
import ProductItem from '../models/productItem';

export function useProductList() {
  const { loading, response, error } = useFetch<ProductItem[]>(
    'https://fakestoreapi.com/products'
  );

  return {
    loading,
    products: response,
    error,
  };
}
