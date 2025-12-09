/* eslint-disable @typescript-eslint/no-namespace */

import type { IResult } from "./result.interface"

export interface ClaimDto {
  type: string
  value: string
  valueType?: string | null
  issuer?: string | null
}

export interface UserDto {
  id?: string | null
  username?: string | null
  roles?: string[]
  claims?: ClaimDto[]
}

export interface ICreateUserReqBody {
  username: string
  password: string
}
export interface ICreateUserResBody {
  isSuccess: boolean
}

export namespace IUser {
  export namespace CreateUser {
    export namespace Request {
      export interface Body {
        username: string
        password: string
      }
    }
    export namespace Response {
      export type Body = boolean
    }
  }

  export namespace GetUsers {
    export namespace Response {
      export type Body = UserDto[]
    }
  }
}
