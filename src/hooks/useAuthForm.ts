import { useForm } from 'react-hook-form';

export const useAuthForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  return {register, errors, reset, handleSubmit};
};
