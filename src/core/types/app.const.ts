export const APP_NAME = 'CSMS'

export const APP_ROUTE_NAME = {
  HOME: 'home',
} as const

export type APP_ROUTE_NAME = (typeof APP_ROUTE_NAME)[keyof typeof APP_ROUTE_NAME]


export const THEME_FONT_FAMILY = {
  IRANSANS: 'IranSans',
  POPPINS: 'Poppins',
} as const
export type THEME_FONT_FAMILY = (typeof THEME_FONT_FAMILY)[keyof typeof THEME_FONT_FAMILY]
