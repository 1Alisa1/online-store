import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Categories from './categories/categories';

const Layout: React.FC = () => {
  const [activeCatalog, setActiveCatalog] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle('catalogOpen');
    setActiveCatalog(!activeCatalog);
  };

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
              <Link to="/security">
                <div className="icon2"></div>
                <p>Войти</p>
              </Link>
              <Link to="/basket">
                <div className="icon3"></div>
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
