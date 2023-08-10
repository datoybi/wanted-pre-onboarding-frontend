import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <h1
      css={css`
        font-size: 7rem;
        font-weight: 300;
        color: #333;
        margin-top: 60px;
      `}
    >
      {children}
    </h1>
  );
}
