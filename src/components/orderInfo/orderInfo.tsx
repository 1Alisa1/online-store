import { useAppSelector } from '../../hooks/reduxHooks';
import styles from './orderInfo.module.scss';

const OrderInfo: React.FC = () => {
  const cart = useAppSelector((state) => state.onlineStore.cart);

  const getTotal = () => {
    let totalAmount = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalAmount += item.amount;
      totalPrice += Number((Number(item.price) * item.amount).toFixed(1));
    });
    return { totalPrice, totalAmount };
  };

  const total = getTotal();

  return (
    <div className={styles.orderInfo}>
      <div className={styles.total}>
        <span>Total</span>
        <span>{total.totalPrice} $</span>
      </div>
      <div className={styles.amount}>
        <span>{total.totalAmount} product</span>
        <span>{total.totalPrice} $</span>
      </div>
      <div className={styles.delivery}>
        <span>Delivery</span>
        <span>For free</span>
      </div>
      <input type="submit" value="Checkout"></input>
    </div>
  );
};

export default OrderInfo;
