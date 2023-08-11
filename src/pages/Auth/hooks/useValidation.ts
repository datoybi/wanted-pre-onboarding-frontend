import { useState, useEffect } from 'react';
interface FormProps {
  email: string;
  password: string;
}

export default function useValidation({ email, password }: FormProps) {
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
  });

  useEffect(() => {
    const checkEmail = email.includes('@');
    const checkPassword = password.length > 7;
    setIsValid(() => ({ isEmail: checkEmail, isPassword: checkPassword }));
  }, [email, password]);

  return { isValid };
}
