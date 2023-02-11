import { useAppSelector } from "../hooks/reduxHooks";

export function useAuth() {
  const {name, surname, id, email} = useAppSelector((state) => state.user);

  return {
    isAuth: Boolean(email),
    email,
    name,
    surname, 
    id,
  };
}