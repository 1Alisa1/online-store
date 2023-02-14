import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './productsFilter.module.scss';

const ProductsFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const query: string = form.search.value;

    if (location.pathname.includes('catalog')) {
      const params: { query?: string } = {};

      if (query.length) params.query = query;

      setSearchParams(params);
    } else {
      navigate('/catalog?query=' + query);
    }
  };

  return (
    <form
      className={styles.headerSearch}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        placeholder="I search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <input type="submit" className={styles.button}></input>
    </form>
  );
};

export default ProductsFilter;
