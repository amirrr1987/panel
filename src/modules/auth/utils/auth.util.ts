import { digitsFaToEn } from '@persian-tools/persian-tools'
import axios from 'axios'
import { get } from 'lodash-es'

import type { ILoginResponseDTO, ILoginResponseResultDTO } from '@/api/data-contracts'

export function unwrapLoginResponse(
  response: ILoginResponseResultDTO | ILoginResponseDTO,
): ILoginResponseDTO {
  const data = get(response, 'data')
  if (data) return data as ILoginResponseDTO
  return response as ILoginResponseDTO
}

export function parseAuthError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return get(error, 'response.data.message', error.message) as string
  }

  if (error instanceof Error) return error.message
  return 'Login failed'
}

export function normalizeBranchCode(value: string): string {
  return digitsFaToEn(value).replace(/\D/g, '')
}
