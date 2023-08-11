import { useState } from 'react';
import { Button } from 'components/UI';
import { createTodo } from 'utils/remotes';

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async (event: any) => {
    event.preventDefault();
    await createTodo(newTodo);
    setNewTodo('');
  };

  return (
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
  );
}
