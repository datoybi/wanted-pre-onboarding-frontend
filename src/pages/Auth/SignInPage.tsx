import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from './hooks/useValidation';
import { Title, Spacing, Button } from 'components/UI';
import { signin } from 'utils/remotes';
import { JWT_KEY, INITIAL_AUTH } from 'utils/constants';
import { AuthForm } from 'types';

export default function SignInPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<AuthForm>(INITIAL_AUTH);
  const { isValid } = useValidation(form);
  const isDisabled = isValid.isEmail && isValid.isPassword ? false : true;

  useEffect(() => {
    if (localStorage.getItem(JWT_KEY)) {
      navigate(`/todo`);
    }
  }, [navigate]);

  const handleOnSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { statusCode, message, accessToken } = await signin(form.email, form.password);
    alert(message);

    if (statusCode === 201) {
      localStorage.setItem(JWT_KEY, accessToken);
      navigate('/todo');
      window.location.reload();
    }
  };

  return (
    <>
      <Title>Login</Title>
      <Spacing size={45} />
      <form className="form form__login">
        <input
          type="text"
          data-testid="email-input"
          className="input width-100"
          placeholder="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <Spacing size={50} />
        <input
          type="password"
          data-testid="password-input"
          className="input width-100"
          placeholder="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <Spacing size={50} />
        <Button data-testid="signin-button" size="big" disabled={isDisabled} onClick={handleOnSubmit}>
          로그인
        </Button>
      </form>
    </>
  );
}
