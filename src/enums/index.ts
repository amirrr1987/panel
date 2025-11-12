import { LoginProviderConstant } from '@/constants';
export type LoginProviderEnum =
  (typeof LoginProviderConstant)[keyof typeof LoginProviderConstant];
