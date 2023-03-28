import { useFetch } from './useFetch';
import ProductItem from '../models/productItem';

export function useProductList(
  categoryId?: string | null,
  searchQuery?: string | null
) {
  let url = 'http://localhost:8080/products';

  if (categoryId) {
    url += '?categoryId=' + categoryId;
  }

  if (searchQuery) {
    url += '?searchQuery=' + searchQuery;
  }

  const { loading, response, error } = useFetch<ProductItem[]>(url);

  let result = response;

  return {
    loading,
    products: result,
    error,
  };
}
