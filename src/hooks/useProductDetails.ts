import ProductItem from '../models/productItem';
import { useFetch } from './useFetch';

export function useProductDetails(productId: ProductItem['id']) {
  const { loading, response, error } = useFetch<ProductItem>(
    `https://fakestoreapi.com/products/${productId}`
  );

  return {
    loading,
    details: response,
    error,
  };
}
