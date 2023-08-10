import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Header({ children }: Props) {
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
      `}
    >
      {children}
    </header>
  );
}
