
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { OverrideToken } from 'ant-design-vue/es/theme/interface'
import type { AliasToken } from 'ant-design-vue/es/theme/interface'
import type { Direction, MappingAlgorithm, SizeType } from 'ant-design-vue/es/config-provider/context'
import { computed } from 'vue'
import type { Locale } from 'ant-design-vue/es/locale-provider'
import fa_IR from 'ant-design-vue/es/locale/fa_IR'
import { APP_NAME } from '@/types/app.const'

export const useAppSettingStore = defineStore('appSetting', () => {


  const token = useStorage<Partial<AliasToken>>(`${APP_NAME}.token`, {});
  const components = useStorage<OverrideToken>(`${APP_NAME}.components`, {});
  const algorithm = useStorage<MappingAlgorithm | MappingAlgorithm[]>(`${APP_NAME}.algorithm`, []);
  const hashed = useStorage<boolean>(`${APP_NAME}.hashed`, false);
  const inherit = useStorage<boolean>(`${APP_NAME}.inherit`, false);
  const componentSize = useStorage<SizeType>(`${APP_NAME}.componentSize`, 'middle');
  const direction = useStorage<Direction>(`${APP_NAME}.direction`, 'rtl');
  const locale = useStorage<Locale>(`${APP_NAME}.locale`, fa_IR);


  const theme = computed(() => ({
    token: token.value,
    components: components.value,
    algorithm: algorithm.value,
    hashed: hashed.value,
    inherit: inherit.value,
  }));


  return { theme, componentSize, direction, locale }
})
