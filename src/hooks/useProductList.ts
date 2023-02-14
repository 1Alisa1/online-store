import { useFetch } from './useFetch';
import ProductItem from '../models/productItem';

export function useProductList(
  category?: string | null,
  searchQuery?: string | null
) {
  let url = 'https://fakestoreapi.com/products';

  if (category) {
    url += '/category/' + category;
  }

  const { loading, response, error } = useFetch<ProductItem[]>(url);

  let result = response;

  if (searchQuery && !error && !loading && result) {
    result = result.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return {
    loading,
    products: result,
    error,
  };
}
