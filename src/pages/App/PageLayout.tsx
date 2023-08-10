import { css } from '@emotion/react';
import Container from 'components/Container';
import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        /* background: '#f5f5f5'; */
        background: red;
      `}
    >
      <div>{children}</div>
    </div>
  );
}
