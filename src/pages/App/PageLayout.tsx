import Container from 'components/UI/Container';
import { ReactNode } from 'react';
import Header from 'components/Header/Header';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
