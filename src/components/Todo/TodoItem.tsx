import { useState } from 'react';
import { Button } from 'components/UI';
import type { TodoType } from 'types';

interface TodoItemProps extends TodoType {
  updateTodos: ({ id, todo, isCompleted }: { id: number | undefined; todo: string; isCompleted: boolean }) => void;
  deleteTodos: (id: number) => void;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoItem({ id, isCompleted, todo, deleteTodos, updateTodos, setIsUpdate }: TodoItemProps) {
  const [isDone, setIsDone] = useState<boolean>(isCompleted);

  const handleIsDone = () => {
    updateTodos({ id, todo, isCompleted: !isCompleted });
    setIsDone(prev => !prev);
  };

  return (
    <li className="li">
      <label>
        <input type="checkbox" className="checkbox" onClick={handleIsDone} defaultChecked={isCompleted} />
        <span className={isDone ? 'done' : ''}>{todo}</span>
      </label>
      <div>
        <Button data-testid="modify-button" type="light" onClick={() => setIsUpdate(prev => !prev)}>
          수정
        </Button>
        <Button data-testid="delete-button" type="danger" onClick={() => deleteTodos(id ?? 0)}>
          삭제
        </Button>
      </div>
    </li>
  );
}
