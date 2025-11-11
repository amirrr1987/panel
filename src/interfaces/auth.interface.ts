export interface LoginRequestBody {
  username: string
  password: string
  grant_type: string
  client_id: string
  client_secret: string
}
export interface LoginResponseBody {
  access_token: string | null
  expires_in: string | null
  refresh_expires_in: string | null
  refresh_token: string | null
  token_type: string | null
  session_state: string | null
  scope: string | null
  'not-before-policy': number
  id_token: string | null
}
