import { useRef } from 'react';
import { css } from '@emotion/react';
import { Button } from 'components/UI';
import type { TodoType } from 'types';

interface EditTodoItemProps extends TodoType {
  updateTodos: ({ id, todo, isCompleted }: { id: number | undefined; todo: string; isCompleted: boolean }) => void;
  deleteTodos: (id: number) => void;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditTodoItem({ id, isCompleted, todo, updateTodos, setIsUpdate }: EditTodoItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const nextTodo = inputRef.current?.value ?? '';
    updateTodos({ id, todo: nextTodo, isCompleted });
    setIsUpdate(prev => !prev);
  };

  return (
    <li className="li">
      <input
        type="text"
        data-testid="modify-input"
        defaultValue={todo}
        ref={inputRef}
        css={css`
          width: 45%;
          margin-left: 40px;
        `}
      />
      <div>
        <Button type="light" data-testid="submit-button" onClick={handleUpdate}>
          제출
        </Button>
        <Button data-testid="cancel-button" type="danger" onClick={() => setIsUpdate(false)}>
          취소
        </Button>
      </div>
    </li>
  );
}
