//@ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title, Spacing } from 'components/UI';
import TodoItem from 'components/Todo/TodoItem';
import AddTodo from 'components/Todo/AddTodo';
import { getTodos } from 'utils/remotes';

export default function TodoListPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(() => data);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('jwt-token')) {
      navigate(`/signin`);
    }
  }, [navigate]);

  return (
    <>
      <Title>todos</Title>
      <Spacing size={30} />
      <AddTodo setTodos={setTodos} />
      <Spacing size={30} />
      <ul className="ul">
        {todos.map(({ id, isCompleted, todo }) => (
          <TodoItem key={id} isCompleted={isCompleted} todo={todo} />
        ))}
      </ul>
    </>
  );
}
