import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
}
