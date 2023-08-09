import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import SignInPage from 'pages/Auth/SignInPage';
import SignUpPage from 'pages/Auth/SignUpPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </ReactRouterRoutes>
  );
};
