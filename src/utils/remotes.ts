import { http } from './http';

export async function signup(email: string, password: string) {
  return await http.post(`auth/signup`, { email, password }, { headers: { 'Content-Type': `application/json` } });
}

export async function signin(email: string, password: string) {
  const data = await http.post(`auth/signin`, { email, password }, { headers: { 'Content-Type': `application/json` } });

  if (data.access_token) {
    return { statusCode: 201, message: '로그인되었습니다.', accessToken: data.access_token };
  }
  return { statusCode: 401, message: '잘못된 로그인 정보입니다.' };
}

export async function createTodo(todo: string) {
  return await http.post(
    `todos`,
    { todo },
    { headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}`, 'Content-Type': `application/json` } }
  );
}

export async function getTodos() {
  return await http.get(`todos`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` } });
}

export async function deleteTodo(id: number) {
  return await http.delete(`/todos/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` },
  });
}

export async function updateTodo(id: number | undefined, todo: string | undefined, isCompleted: boolean) {
  return await http.put(
    `/todos/${id}`,
    { todo, isCompleted },
    { headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` } }
  );
}
