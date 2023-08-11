import { useState } from 'react';
import { css } from '@emotion/react';
import { Button } from 'components/UI';

export default function TodoItem({ isCompleted, todo }: any) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(prev => !prev);
  };

  const showTodoElement = (
    <>
      <label>
        <input
          type="checkbox"
          className="checkbox"
          onClick={() => setIsDone(prev => !prev)}
          defaultChecked={isCompleted}
        />
        <span className={isDone ? 'done' : ''}>{todo}</span>
      </label>
      <div>
        <Button data-testid="modify-button" type="light" onClick={handleUpdate}>
          수정
        </Button>
        <Button data-testid="delete-button" type="danger">
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
