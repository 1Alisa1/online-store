import { useState } from 'react';
import Login from '../../components/authorization/login';
import Registration from '../../components/authorization/registration';
import styles from './securityPage.module.scss';

enum Pages {
  Registration = 1,
  Login = 2,
}

const SecurityPage = () => {
  const [activePage, setActivePage] = useState(Pages.Login);
  
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.loginBtn} onClick={() => setActivePage(Pages.Login)}>Login</button>
        <button className={styles.registrationBtn} onClick={() => setActivePage(Pages.Registration)}>Register</button>
      </div>
      {activePage === Pages.Login && <Login />}
      {activePage === Pages.Registration && <Registration />}
    </div>
  );
}

export default SecurityPage;