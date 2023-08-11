import { useState } from 'react';
import { Button, Spacing } from 'components/UI';
import { createTodo } from 'utils/remotes';
import type { TodoType } from 'types';

interface AddTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function AddTodo({ setTodos }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async (event: React.MouseEvent) => {
    event.preventDefault();
    const todos = await createTodo(newTodo);
    setTodos(prev => [...prev, todos]);
    setNewTodo('');
  };

  return (
    <>
      <Spacing size={30} />
      <form className="form">
        <input
          type="text"
          data-testid="new-todo-input"
          className="input"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <Button data-testid="new-todo-add-button" size="big" onClick={handleAddTodo} disabled={newTodo.length === 0}>
          추가
        </Button>
      </form>
      <Spacing size={30} />
    </>
  );
}
