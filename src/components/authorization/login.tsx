import { useAppDispatch } from '../../hooks/reduxHooks';
import { setUser } from '../../store/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './authorization.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuthForm } from '../../hooks/useAuthForm';
import ErrorMessage from '../errorMessage/errorMessage';

const Login: React.FC = () => {
  const { register, errors, reset, handleSubmit } = useAuthForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (data: { email?: string; password?: string }) => {
    const { email, password } = data;

    if (!email || !password) {
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (user) {
          const [name, surname] = [...(user.displayName?.split(' ') ?? [])];

          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              name: name,
              surname: surname,
            })
          );
          navigate('/user');
          reset();
        }
      })
      .catch(() => alert('Invalid user'));
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit(handleLogin)}>
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
            placeholder="Password"
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
        <input className={styles.button} type="submit" value="Log in"></input>
      </form>
    </>
  );
};

export default Login;
