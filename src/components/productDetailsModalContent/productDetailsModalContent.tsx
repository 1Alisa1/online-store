import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useProductDetails } from '../../hooks/useProductDetails';
import ProductItem from '../../models/productItem';
import { addCart } from '../../store/storeSlice';
import Spinner from '../spinner/spinner';
import styles from './productDetailsModalContent.module.scss';

interface productDetailsModalContentProps {
  productId: number;
}

const ProductDetailsModalContent: React.FC<productDetailsModalContentProps> = ({
  productId,
}) => {
  const { loading, details, error } = useProductDetails(productId);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (details: ProductItem) => {
    dispatch(addCart(details));
    navigate('/cart');
  }  

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
            <input
              type="submit"
              value="Add to shopping cart"
              onClick={() => handleClick(details)}
            ></input>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsModalContent;
