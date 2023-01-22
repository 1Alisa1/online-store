import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductList } from '../../hooks/useProductList';
import CardProduct from '../cardProduct/cardProduct';
import Modal from '../modal/modal';
import ProductDetailsModalContent from '../productDetailsModalContent/productDetailsModalContent';
import styles from './catalog.module.scss';

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category: string | null = searchParams.get('category');

  const { loading, products, error } = useProductList(category);

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

export default Catalog;
