import OrderInfo from '../../components/orderInfo/orderInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { decrementAmount, incrementAmount, removeItem } from '../../store/storeSlice';
import styles from './cartPage.module.scss';

const CartPage = () => {
  const cart = useAppSelector((state) => state.onlineStore.cart);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <h1>Shopping Cart</h1>
      <div className={styles.cart}>
        <div className={styles.product}>
          {cart?.map((item) => (
            <div key={item.id} className={styles.productContent}>
              <img alt="product" src={item.image}></img>
              <div className={styles.productInfo}>
                <div className={styles.productTitle}>{item.title}</div>
                <div className={styles.productPrice}>{item.price} $</div>
                <div className={styles.count}>
                  <button
                    className={styles.buttonLeft}
                    onClick={() => dispatch(decrementAmount(item.id))}
                  >
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={styles.buttonRight}
                    onClick={() => dispatch(incrementAmount(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(removeItem(item.id))}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <OrderInfo />
      </div>
    </div>
  );
};

export default CartPage;
