import { Title, Spacing, Button } from 'components';
import { useState } from 'react';

export default function TodoListPage() {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(prev => !prev);
  };
  console.log(isUpdate);

  return (
    <>
      <Title>todos</Title>
      <Spacing size={17} />
      <form className="form">
        <input type="text" data-testid="new-todo-input" className="input" />
        <Button data-testid="new-todo-add-button" size="big">
          추가
        </Button>
      </form>
      <Spacing size={17} />
      <ul className="ul">
        <li className="li">
          <label>
            <input type="checkbox" className="checkbox" />
            <span>TODO 1</span>
          </label>
          <div>
            <Button data-testid="modify-button" type="light" onClick={handleUpdate}>
              수정
            </Button>
            <Button data-testid="delete-button" type="danger">
              삭제
            </Button>
          </div>
        </li>
      </ul>
    </>
  );
}
