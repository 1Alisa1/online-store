import styles from './card.module.scss';

interface DataBlockProps {
  children: React.ReactNode;
  title: string;
}

const Card: React.FC<DataBlockProps> = ({children, title}) => {
  return (
    <div className={styles.data}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
