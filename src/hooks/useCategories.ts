import Category from '../models/category';
import { useFetch } from './useFetch';

export function useCategories() {
  const { loading, response, error } = useFetch<Array<Category>>(
    'http://localhost:8080/categories'
  );

  return {
    loading,
    categories: response,
    error,
  };
}
