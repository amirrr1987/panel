import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)

export function isTokenExpired(exp?: number): boolean {
  if (!exp) return false
  return dayjs.unix(exp).isBefore(dayjs())
}

export function formatTokenExpiry(exp?: number): string {
  if (!exp) return ''
  return dayjs.unix(exp).calendar('jalali').format('YYYY/MM/DD HH:mm')
}
