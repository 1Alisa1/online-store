import styles from './authorization.module.scss';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useAuthForm } from '../../hooks/useAuthForm';
import ErrorMessage from '../errorMessage/errorMessage';

const Registration: React.FC = () => {
  const { register, errors, reset, handleSubmit } = useAuthForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (data: {
    email?: string;
    password?: string;
    name?: string;
    surname?: string;
  }) => {
    const { email, password, name, surname } = data;

    if (!email || !password) {
      return;
    }

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            name: name,
            surname: surname,
          })
        );
        navigate('/');
        reset();
      })
      .catch(console.error);

    const currentUser = auth.currentUser;

    if (currentUser !== null) {
      updateProfile(currentUser, {
        displayName: name + ' ' + surname,
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <form
        className={styles.container}
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            {...register('name', {
              required: 'Field must not be empty',
            })}
          ></input>
          <ErrorMessage>
            {errors?.name && `${errors?.name?.message || 'Error'}`}
          </ErrorMessage>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Surname"
            {...register('surname', {
              required: 'Field must not be empty',
            })}
          ></input>
          <ErrorMessage>
            {errors?.surname && `${errors?.surname?.message || 'Error'}`}
          </ErrorMessage>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Field must not be empty',
            })}
          ></input>
          <ErrorMessage>
            {errors?.email && `${errors?.email?.message || 'Invalid email'}`}
          </ErrorMessage>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            placeholder="Pick a password"
            {...register('password', {
              required: 'Field must not be empty',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters',
              },
            })}
          ></input>
          <ErrorMessage>
            {errors?.password && `${errors?.password?.message || 'Error'}`}
          </ErrorMessage>
        </div>
        <input type="submit" className={styles.button} value="Register"></input>
      </form>
    </>
  );
};

export default Registration;
