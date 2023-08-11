import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import { Routes } from 'pages/App/Routes';
import { PageLayout } from 'pages/App/PageLayout';

function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0;
          }
        `}
      />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
