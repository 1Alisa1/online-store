import styles from './cardProduct.module.scss';

interface CardProductProps {
  img: string;
  price: string;
  title: string;
}

const CardProduct: React.FC<CardProductProps> = ({img, price, title}) => {
  if (title.length > 20) {
    title = title.substring(0, 20) + '...';
  }

  return (
    <div className={styles.card}>
      <img src={img} alt="product" className={styles.cardImg}/>
      <div className={styles.cardPrice}>{price} $</div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
}

export default CardProduct;