import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { JWT_KEY } from 'utils/constants';

export default function Header() {
  const [jwtToken] = useState<string | null>(localStorage.getItem(JWT_KEY));
  const navigate = useNavigate();

  const handleLogout = () => {
    if (jwtToken) {
      localStorage.removeItem(JWT_KEY);
      navigate('/signin');
      window.location.reload();
    }
  };

  return (
    <header
      css={css`
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        backdrop-filter: saturate(180%) blur(5px);
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: end;
        box-shadow: 0 5px 10px #e1e5ee;
      `}
    >
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
    </header>
  );
}
