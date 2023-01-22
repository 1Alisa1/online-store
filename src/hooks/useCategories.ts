import { useFetch } from './useFetch';

export function useCategories() {
  const { loading, response, error } = useFetch<string[]>(
    'https://fakestoreapi.com/products/categories'
  );

  return {
    loading,
    categories: response,
    error,
  };
}
