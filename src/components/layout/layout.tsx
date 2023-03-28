import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useAuth } from '../../hooks/useAuth';
import Categories from '../categories/categories';
import ProductsFilter from '../productsFilter/productsFilter';
import styles from './layout.module.scss';

const Layout: React.FC = () => {
  const [activeCatalog, setActiveCatalog] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle('catalogOpen');
    setActiveCatalog(!activeCatalog);
  };
  
  const cart = useAppSelector((state) => state.onlineStore.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount;
    });
    return total;
  };

  const { isAuth, name } = useAuth();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.headerTop}>
            <ul>
              <li>
                <div className={styles.flagBy}></div>
                <div>BYN</div>
              </li>
              <li>
                <div className={styles.iconAddress}></div>
                <div>Минск</div>
              </li>
              <li>
                <div className={styles.sale}>Продавайте на Wildberries</div>
              </li>
            </ul>
          </div>
          <div className={styles.headerBottom}>
            <div className={styles.headerCatalog}>
              <button type="button" onClick={handleClick}></button>
            </div>
            <Link to="/" className={styles.headerLogo}>
              <img
                src="https://static.wbstatic.net/i/header/logo-v1.svg"
                alt="wildberries"
              ></img>
            </Link>
            <ProductsFilter></ProductsFilter>
            <div className={styles.headerContent}>
              <Link
                to="/addresses"
                className={styles.addresses}
                data-title="25 378 пунктов выдачи"
              >
                <div className={styles.icon1}></div>
                <p>Адреса</p>
              </Link>
              <Link to={isAuth ? '/user' : '/security'}>
                <div className={styles.icon2}></div>
                <p>{isAuth ? name : 'Войти'}</p>
              </Link>
              <Link to="/cart">
                <div className={styles.icon3}></div>
                <div className={styles.badge}>{getTotalQuantity() || 0}</div>
                <p>Корзина</p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
        <Categories isActive={activeCatalog} handleClick={handleClick} />
      </main>

      <footer>
        <div>© 2022 Company, Inc</div>
      </footer>
    </>
  );
};

export { Layout };
