import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import Container from 'components/UI/Container';
import { ReactNode } from 'react';
import { Header } from 'components/UI';

export function PageLayout({ children }: { children: ReactNode }) {
  const jwtToken = localStorage.getItem('jwt-token');

  const handleLogout = () => {
    if (jwtToken) {
      localStorage.removeItem('jwt-token');
    }
  };

  return (
    <>
      <Header>
        <nav
          css={css`
            height: 60px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 300px;
          `}
        >
          {jwtToken ? (
            <Link to="/signin" onClick={handleLogout}>
              로그아웃
            </Link>
          ) : (
            <>
              <Link to="/signin">로그인</Link>
              <Link to="/signup">회원가입</Link>
            </>
          )}
        </nav>
      </Header>
      <Container>{children}</Container>
    </>
  );
}
