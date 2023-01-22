import { useFetch } from './useFetch';
import ProductItem from '../models/productItem';

export function useProductList(category?: string | null) {
  let url = 'https://fakestoreapi.com/products';

  if (category) {
    url += '/category/' + category;
  }

  const { loading, response, error } = useFetch<ProductItem[]>(url);

  return {
    loading,
    products: response,
    error,
  };
}
