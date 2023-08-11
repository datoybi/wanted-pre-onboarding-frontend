import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from 'components/UI';
import TodoItem from 'components/Todo/TodoItem';
import AddTodo from 'components/Todo/AddTodo';
import EditTodoItem from 'components/Todo/EditTodoItem';
import { getTodos, deleteTodo, updateTodo } from 'utils/remotes';
import { JWT_KEY } from 'utils/constants';
import type { TodoType } from 'types';

export default function TodoListPage() {
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(() => data);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(JWT_KEY)) {
      navigate(`/signin`);
    }
  }, [navigate]);

  const deleteTodos = async (id: number) => {
    await deleteTodo(id);
    const index = todos.findIndex((todo: TodoType) => todo.id === id);
    const nextTodos = [...todos];
    nextTodos.splice(index, 1);
    setTodos(() => nextTodos);
  };

  const updateTodos = async ({ id, todo, isCompleted }: TodoType) => {
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
        {todos.map(({ id, isCompleted, todo }: TodoType) =>
          isUpdate ? (
            <EditTodoItem
              key={id}
              id={id}
              isCompleted={isCompleted}
              todo={todo}
              deleteTodos={deleteTodos}
              updateTodos={updateTodos}
              setIsUpdate={setIsUpdate}
            />
          ) : (
            <TodoItem
              key={id}
              id={id}
              isCompleted={isCompleted}
              todo={todo}
              deleteTodos={deleteTodos}
              updateTodos={updateTodos}
              setIsUpdate={setIsUpdate}
            />
          )
        )}
      </ul>
    </>
  );
}
