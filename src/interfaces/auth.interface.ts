export interface ILoginRequest {
  username: string;
  password: string;
}
export interface ILoginResponse {
  access_token: string | null;
  expires_in: string | null;
  refresh_expires_in: string | null;
  refresh_token: string | null;
  token_type: string | null;
  session_state: string | null;
  scope: string | null;
  'not-before-policy': number;
  id_token: string | null;
}
