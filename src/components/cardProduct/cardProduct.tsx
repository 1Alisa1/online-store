import { useState } from 'react';
import Modal from '../modal/modal';
import Spinner from '../spinner/spinner';
import styles from './cardProduct.module.scss';

interface CardProductProps {
  img: string;
  price: string;
  title: string;
  description: string;
}

const CardProduct: React.FC<CardProductProps> = ({ img, price, title, description }) => {
  const [loading, setLoading] = useState(true);
  const [modalActive, setModalActive] = useState(false);

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
          <div className={styles.productMoreInfoBackground}>
            <button
              className={styles.openProduct}
              type="button"
              onClick={() => setModalActive(true)}
            >
              More information
            </button>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modalContent}>
          <img src={img} alt="product" className={styles.modalContentImg}></img>
          <div>
            <div className={styles.modalContentTitle}>{title}</div>
            <div className={styles.modalContentPrice}>{price} $</div>
            <div className={styles.modalContentDescription}>{description}</div>
          </div>
        </div>
      </Modal>
      <div className={styles.cardPrice}>{price} $</div>
      <div className={styles.cardTitle}>{title.length > 20 ? title.substring(0, 20) + '...' : title}</div>
    </div>
  );
};

export default CardProduct;
