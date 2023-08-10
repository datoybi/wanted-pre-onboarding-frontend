import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import SignInPage from 'pages/Auth/SignInPage';
import SignUpPage from 'pages/Auth/SignUpPage';
import TodoListPage from 'pages/Todo/TodoListPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/todo" element={<TodoListPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<SignInPage />} />
    </ReactRouterRoutes>
  );
};
