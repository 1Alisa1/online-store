import ProductItem from '../models/productItem';
import { useFetch } from './useFetch';

export function useProductDetails(productId: ProductItem['id']) {
  const { loading, response, error } = useFetch<ProductItem>(
    `http://localhost:8080/products/${productId}`
  );

  return {
    loading,
    details: response,
    error,
  };
}
