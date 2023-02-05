import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/userSlice';
import { getAuth, signOut } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/reduxHooks';
import styles from './userPage.module.scss';
import Card from '../../components/card/card';

const UserPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/security');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { name, surname, email } = useAuth();
  return (
    <div className={styles.wrapper}>
      <h1>Welcome {name}</h1>
      <div className={styles.container}>
        <Card title='Personal data'>
          <div>
            <span>Name:</span> {name} {surname}
          </div>
          <div>
            <span>Email:</span> {email}
          </div>
          <button className={styles.logoutBtn} onClick={handleClick}>
            Log out
          </button>
        </Card>
        <Card title='Delivery'>
          <div>
            <span>Nearest delivery</span> not expected
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserPage;
