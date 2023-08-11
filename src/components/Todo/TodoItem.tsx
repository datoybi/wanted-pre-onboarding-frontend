import { useState, useRef } from 'react';
import { css } from '@emotion/react';
import { Button } from 'components/UI';

export default function TodoItem({ id, isCompleted, todo, deleteTodos, updateTodos }: any) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDone, setIsDone] = useState(isCompleted);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const nextTodo = inputRef.current?.value;
    updateTodos({ id, todo: nextTodo, isCompleted });
    setIsUpdate(prev => !prev);
  };

  const handleIsDone = () => {
    updateTodos({ id, todo, isCompleted: !isCompleted });
    setIsDone((prev: any) => !prev);
  };

  const showTodoElement = (
    <>
      <label>
        <input type="checkbox" className="checkbox" onClick={handleIsDone} defaultChecked={isCompleted} />
        <span className={isDone ? 'done' : ''}>{todo}</span>
      </label>
      <div>
        <Button data-testid="modify-button" type="light" onClick={() => setIsUpdate(prev => !prev)}>
          수정
        </Button>
        <Button data-testid="delete-button" type="danger" onClick={() => deleteTodos(id)}>
          삭제
        </Button>
      </div>
    </>
  );

  const editTodoElement = (
    <>
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
    </>
  );

  return <li className="li">{isUpdate ? editTodoElement : showTodoElement}</li>;
}
