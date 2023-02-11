import styles from './errorMessage.module.scss';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
      <span style={{ color: 'red' }} className={styles.message}>{children}</span>
  );
    
  
};

export default ErrorMessage;
