import { http } from './http';

export async function signup(email: string, password: string) {
  const data = await http.post(
    `auth/signup`,
    {
      email,
      password,
    },
    { headers: { 'Content-Type': `application/json` } }
  );

  return data;
}

export async function signin(email: string, password: string) {
  const data = await http.post(
    `auth/signin`,
    {
      email,
      password,
    },
    { headers: { 'Content-Type': `application/json` } }
  );

  if (data.access_token) {
    return { statusCode: 201, message: '로그인되었습니다.', accessToken: data.access_token };
  }
  return { statusCode: 401, message: '잘못된 로그인 정보입니다.' };
}

export async function createTodo(todo: string) {
  const data = await http.post(
    `todos`,
    {
      todo,
    },
    { headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}`, 'Content-Type': `application/json` } }
  );

  return data;
}

export async function getTodos() {
  const data = await http.get(`todos`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` } });
  return data;
}

export async function deleteTodo(id: string) {
  const data = await http.delete(`/todos/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` },
  });
  console.log(data);
  return data;
}

export async function updateTodo(id: string, todo: string, isCompleted: boolean) {
  const data = await http.put(
    `/todos/${id}`,
    {
      todo,
      isCompleted,
    },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` },
    }
  );
  console.log(data);
  return data;
}
