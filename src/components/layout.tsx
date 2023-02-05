import { useState } from 'react';
import { Link, Outlet, redirect } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { useAuth } from '../hooks/useAuth';
import Categories from './categories/categories';

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
      <header className="header">
        <div className="wrapper">
          <div className="headerTop">
            <ul>
              <li>
                <div className="flagBy"></div>
                <div>BYN</div>
              </li>
              <li>
                <div className="iconAddress"></div>
                <div>Минск</div>
              </li>
              <li>
                <div className="sale">Продавайте на Wildberries</div>
              </li>
            </ul>
          </div>
          <div className="headerBottom">
            <div className="headerCatalog">
              <button type="button" onClick={handleClick}></button>
            </div>
            <Link to="/" className="headerLogo">
              <img
                src="https://static.wbstatic.net/i/header/logo-v1.svg"
                alt="wildberries"
              ></img>
            </Link>
            <div className="headerSearch">
              <input
                type="search"
                autoComplete="off"
                placeholder="Я ищу..."
              ></input>
              <button type="button"></button>
            </div>
            <div className="headerContent">
              <Link
                to="/addresses"
                className="addresses"
                data-title="25 378 пунктов выдачи"
              >
                <div className="icon1"></div>
                <p>Адреса</p>
              </Link>
              <Link to={isAuth ? '/user' : '/security'}>
                <div className="icon2"></div>
                <p>{isAuth ? name : 'Войти'}</p>
              </Link>
              <Link to="/cart">
                <div className="icon3"></div>
                <div className="badge">{getTotalQuantity() || 0}</div>
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
