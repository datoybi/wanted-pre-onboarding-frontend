import { Routes } from 'pages/App/Routes';
import { PageLayout } from 'pages/App/PageLayout';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
