import type { LoginProviderEnum } from '@/enums';

// export interface ICreateUserRequest {
//   username: string;
//   password: string;
// }
// export interface ICreateUserResponse {
//   id: string;
//   username: string;
//   password: string;
// }
export interface ICreateUserActiveDirectoryRequest {
  username: string;
  password: string;
  loginProvider: LoginProviderEnum;
}
export interface ICreateUserActiveDirectoryResponse {
  isSuccess: boolean;
}
