import { useState } from 'react';
import { Button, Spacing } from 'components/UI';
import { createTodo } from 'utils/remotes';

export default function AddTodo({ setTodos }: any) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async (event: any) => {
    event.preventDefault();
    const todos = await createTodo(newTodo);
    setTodos((prev: any) => [...prev, todos]);
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
