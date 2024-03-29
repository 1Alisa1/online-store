import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';
import styles from './categories.module.scss';

interface CategoriesProps {
  isActive: boolean;
  handleClick: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ isActive, handleClick }) => {
  const { loading, categories, error } = useCategories();

  return (
    <div>
      <div
        className={styles.categories}
        style={{left: isActive ? '0' : '-100%'}}
      >
        {(() => {
          if (error) {
            return <div>Error: Oops... </div>;
          } else if (loading) {
            return <div>Loading... </div>;
          } else {
            return (
              <ul className={styles.items}>
                {categories &&
                  categories.map((el) => {
                    return (
                      <Link key={el.categoryid} to={`catalog?category=${el.categoryid}`}>
                        <input
                          className={styles.button}
                          type="button"
                          value={el.name}
                          onClick={handleClick}
                        ></input>
                      </Link>
                    );
                  })}
              </ul>
            );
          }
        })()}
      </div>
      <div
        className={styles.overlay}
        style={{ display: isActive ? 'block' : 'none' }}
      ></div>
    </div>
  );
};

export default Categories;
