import { useState } from 'react';
import ProductItem from '../../models/productItem';
import Spinner from '../spinner/spinner';
import styles from './cardProduct.module.scss';

interface CardProductProps {
  productItem: ProductItem;
  handleDetailsClick: (productId: ProductItem['id']) => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  productItem,
  handleDetailsClick,
}) => {
  const [loading, setLoading] = useState(true);

  const { image, price, title } = productItem;

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <div style={{ display: loading ? 'block' : 'none' }}>
          <Spinner />
        </div>
        <div style={{ display: loading ? 'none' : 'block' }}>
          <img
            src={image}
            alt="product"
            className={styles.cardImg}
            onLoad={() => setLoading(false)}
          />
          <div className={styles.productMoreInfoBackground}>
            <button
              className={styles.openProduct}
              type="button"
              onClick={() => handleDetailsClick(productItem.id)}
            >
              More information
            </button>
          </div>
        </div>
      </div>
      <div className={styles.cardPrice}>${price}</div>
      <div className={styles.cardTitle}>
        {title}
      </div>
    </div>
  );
};

export default CardProduct;
