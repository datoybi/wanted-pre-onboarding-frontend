import { useState } from 'react';
import useValidation from './hooks/useValidation';
import { Title, Spacing, Button } from 'components/UI';

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { isValid } = useValidation(form);

  return (
    <>
      <Title>Sign up</Title>
      <Spacing size={45} />
      <form className="form form__login">
        <input
          type="text"
          data-testid="email-input"
          className="input width-100"
          placeholder="email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <Spacing size={50} />
        <input
          type="password"
          data-testid="password-input"
          className="input width-100"
          placeholder="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <Spacing size={50} />
        <Button data-testid="signup-button" size="big" disabled={isValid.isEmail && isValid.isPassword}>
          회원가입
        </Button>
      </form>
    </>
  );
}
