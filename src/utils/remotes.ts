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
    localStorage.setItem('jwt-token', data.access_token);
    return { statusCode: 201, message: '로그인되었습니다.' };
  }
  return { statusCode: 401, message: '잘못된 로그인 정보입니다.' };
}
