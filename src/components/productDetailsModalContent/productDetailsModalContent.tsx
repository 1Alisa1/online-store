import { useProductDetails } from '../../hooks/useProductDetails';
import Spinner from '../spinner/spinner';
import styles from './productDetailsModalContent.module.scss';

interface productDetailsModalContentProps {
  productId: number;
}

const ProductDetailsModalContent: React.FC<productDetailsModalContentProps> = ({
  productId,
}) => {
  const { loading, details, error } = useProductDetails(productId);

  return (
    <>
      {error && <div>Oops... Something went wrong...</div>}
      {loading && <Spinner />}
      {!loading && details && (
        <div className={styles.modalContent}>
          <img
            src={details.image}
            alt="product"
            className={styles.modalContentImg}
          ></img>
          <div>
            <div className={styles.modalContentTitle}>{details.title}</div>
            <div className={styles.modalContentPrice}>{details.price} $</div>
            <div className={styles.modalContentDescription}>
              {details.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsModalContent;
