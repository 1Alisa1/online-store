import { useEffect, useState } from 'react';
import ProductItem from '../../models/productItem';
import Spinner from '../spinner/spinner';
import styles from './productDetailsModalContent.module.scss';

interface productDetailsModalContentProps {
  productId: number;
}

const ProductDetailsModalContent: React.FC<productDetailsModalContentProps> = ({
  productId,
}) => {
  const [productItem, setProductItem] = useState<ProductItem | null>(null);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setProductItem(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          console.log(error.message);
        }
      );
  }, [productId]);

  return (
    <>
      {error && <div>Oops... Something went wrong...</div>}
      {!isLoaded && <Spinner />}
      {isLoaded && productItem && (
        <div className={styles.modalContent}>
          <img
            src={productItem.image}
            alt="product"
            className={styles.modalContentImg}
          ></img>
          <div>
            <div className={styles.modalContentTitle}>{productItem.title}</div>
            <div className={styles.modalContentPrice}>
              {productItem.price} $
            </div>
            <div className={styles.modalContentDescription}>
              {productItem.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsModalContent;
