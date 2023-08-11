//@ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from 'components/UI';
import TodoItem from 'components/Todo/TodoItem';
import AddTodo from 'components/Todo/AddTodo';
import { getTodos } from 'utils/remotes';
import { deleteTodo, updateTodo } from 'utils/remotes';

export default function TodoListPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  console.log(todos);

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

  const deleteTodos = async (id: number) => {
    await deleteTodo(id);
    const index = todos.findIndex(todo => todo.id === id);
    const nextTodos = [...todos];
    nextTodos.splice(index, 1);
    setTodos(() => nextTodos);
  };

  const updateTodos = async ({ id, todo, isCompleted }) => {
    await updateTodo(id, todo, isCompleted);
    const index = todos.findIndex(todo => todo.id === id);
    const nextTodos = [...todos];
    nextTodos.splice(index, 1, { ...todos[index], isCompleted, todo });
    setTodos(() => nextTodos);
  };

  return (
    <>
      <Title>todos</Title>
      <AddTodo setTodos={setTodos} />
      <ul className="ul">
        {todos.map(({ id, isCompleted, todo }) => (
          <TodoItem
            key={id}
            id={id}
            isCompleted={isCompleted}
            todo={todo}
            deleteTodos={deleteTodos}
            updateTodos={updateTodos}
          />
        ))}
      </ul>
    </>
  );
}
