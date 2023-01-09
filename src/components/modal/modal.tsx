import styles from './modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: (value: React.SetStateAction<boolean>) => void;
  children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
  return (
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick ={() => setActive(false)}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
