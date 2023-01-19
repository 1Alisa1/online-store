import { useState } from 'react';
import { useProductList } from '../../hooks/useProductList';
import CardProduct from '../cardProduct/cardProduct';
import Modal from '../modal/modal';
import ProductDetailsModalContent from '../productDetailsModalContent/productDetailsModalContent';
import styles from './cardsProductWrapper.module.scss';

const CardsProductWrapper: React.FC = () => {
  const { loading, products, error } = useProductList();

  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  if (error) {
    return <div>Error: Oops... </div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ul className={styles.items}>
          {products &&
            products.map((el) => (
              <li key={el.id}>
                <CardProduct
                  productItem={el}
                  handleDetailsClick={setActiveProductId}
                />
              </li>
            ))}
        </ul>
        <Modal
          active={!!activeProductId}
          setActive={() => setActiveProductId(null)}
        >
          {activeProductId && (
            <ProductDetailsModalContent productId={activeProductId} />
          )}
        </Modal>
      </>
    );
  }
};

export default CardsProductWrapper;
