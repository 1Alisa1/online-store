import { useState, useEffect } from 'react';
import CardProduct from '../cardProduct/cardProduct';
import Modal from '../modal/modal';
import ProductDetailsModalContent from '../productDetailsModalContent/productDetailsModalContent';
import styles from './cardsProductWrapper.module.scss';

interface ProductItem {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

const CardsProductWrapper: React.FC = () => {
  const [items, setItems] = useState<ProductItem[]>([]);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          console.log(error.message);
        }
      );
  }, []);

  if (error) {
    return <div>Error: Oops... </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ul className={styles.items}>
          {items.map((el) => (
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
