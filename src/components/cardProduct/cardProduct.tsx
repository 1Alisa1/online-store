import { useState } from 'react';
import Spinner from '../spinner/spinner';
import styles from './cardProduct.module.scss';

interface CardProductProps {
  img: string;
  price: string;
  title: string;
}

const CardProduct: React.FC<CardProductProps> = ({ img, price, title }) => {
  const [loading, setLoading] = useState(true);

  if (title.length > 20) {
    title = title.substring(0, 20) + '...';
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <div style={{ display: loading ? 'block' : 'none' }}>
          <Spinner />
        </div>
        <div style={{ display: loading ? 'none' : 'block' }}>
          <img
            src={img}
            alt="product"
            className={styles.cardImg}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
      <div className={styles.cardPrice}>{price} $</div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default CardProduct;
