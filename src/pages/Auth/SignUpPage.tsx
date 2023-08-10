import { Title, Spacing, Button } from 'components/UI';

export default function SignUpPage() {
  return (
    <>
      <Title>Sign up</Title>
      <Spacing size={45} />
      <form className="form form__login">
        <input type="text" data-testid="email-input" className="input width-100" placeholder="email" />
        <Spacing size={50} />
        <input type="password" data-testid="password-input" className="input width-100" placeholder="password" />
        <Spacing size={50} />
        <Button data-testid="signup-button" size="big">
          회원가입
        </Button>
      </form>
    </>
  );
}
