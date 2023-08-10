import { useState } from 'react';
import useValidation from './hooks/useValidation';
import { Title, Spacing, Button } from 'components/UI';

export default function SignInPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { isValid } = useValidation(form);

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
        <Button data-testid="signin-button" size="big" disabled={isValid.isEmail && isValid.isPassword}>
          로그인
        </Button>
      </form>
    </>
  );
}
