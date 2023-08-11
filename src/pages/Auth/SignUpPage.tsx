import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from './hooks/useValidation';
import { Title, Spacing, Button } from 'components/UI';
import { signup } from 'utils/remotes';
import { AuthForm } from 'types';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<AuthForm>({
    email: '',
    password: '',
  });
  const { isValid } = useValidation(form);
  const isDisabled = isValid.isEmail && isValid.isPassword ? false : true;

  const handleOnSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { statusCode, message } = await signup(form.email, form.password);

    if (statusCode) {
      alert(message);
    } else {
      alert('회원가입되었습니다.');
      navigate('/signin');
    }
  };

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
        <Button data-testid="signup-button" size="big" disabled={isDisabled} onClick={handleOnSubmit}>
          회원가입
        </Button>
      </form>
    </>
  );
}
