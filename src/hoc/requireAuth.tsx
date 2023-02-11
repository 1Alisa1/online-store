import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth  = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const {isAuth} = useAuth();

  if (!isAuth) {
    return <Navigate to="/security" state={{from: location}}/>;
  }

  return children;
};

export {RequireAuth};
