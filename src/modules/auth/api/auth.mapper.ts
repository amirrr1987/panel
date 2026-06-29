import { defaults } from 'lodash-es'

import type { ILoginResponseDTO } from '@/api/data-contracts'

import type { AuthUser } from '../models/auth.model'

export function mapAuthUser(dto: ILoginResponseDTO): AuthUser {
  return defaults(
    {
      accessToken: dto.access_token!,
      refreshToken: dto.refresh_token,
      tokenType: dto.token_type,
      expiresIn: dto.expires_in,
      refreshExpiresIn: dto.refresh_expires_in,
    },
    {
      accessToken: '',
      refreshToken: '',
      tokenType: 'Bearer',
      expiresIn: '',
      refreshExpiresIn: '',
    } satisfies AuthUser,
  )
}
