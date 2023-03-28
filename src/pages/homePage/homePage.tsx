import Catalog from "../../components/catalog/catalog";
import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Catalog />
    </div>
  );
}

export default HomePage;