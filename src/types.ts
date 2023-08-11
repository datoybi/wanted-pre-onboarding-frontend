export interface AuthForm {
  email: string;
  password: string;
}

export type TodoType = {
  id?: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
};
