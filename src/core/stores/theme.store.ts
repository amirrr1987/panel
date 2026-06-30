
import { defineStore } from 'pinia'
import { useCssVar, useStorage } from '@vueuse/core'
import type { OverrideToken } from 'ant-design-vue/es/theme/interface'
import type { AliasToken } from 'ant-design-vue/es/theme/interface'
import type { Direction, MappingAlgorithm, SizeType } from 'ant-design-vue/es/config-provider/context'
import { computed } from 'vue'
import type { Locale } from 'ant-design-vue/es/locale-provider'
import fa_IR from 'ant-design-vue/es/locale/fa_IR'
import en_US from 'ant-design-vue/es/locale/en_US'
import { generateName } from '@/utils'
import type { Language } from '@/models/app.type'
import { THEME_FONT_FAMILY } from '../types/app.const'

export const useThemeStore = defineStore(generateName('theme-store'), () => {


  const colorPrimary = useCssVar('--color-primary')
  
  const token = useStorage<Partial<AliasToken>>(generateName('token'), {
    colorPrimary: colorPrimary.value,
    fontFamily: THEME_FONT_FAMILY.IRANSANS,
    borderRadius: 6,
    fontSize: 14,
    colorBgLayout: '#e9e9e9',
  });
  const components = useStorage<OverrideToken>(generateName('components'), {});
  const algorithm = useStorage<MappingAlgorithm | MappingAlgorithm[]>(generateName('algorithm'), []);
  const hashed = useStorage<boolean>(generateName('hashed'), false);
  const inherit = useStorage<boolean>(generateName('inherit'), false);
  const componentSize = useStorage<SizeType>(generateName('componentSize'), 'middle');
  const direction = useStorage<Direction>(generateName('direction'), 'rtl');
  const language = useStorage<Language>(generateName('language'), 'fa');


  const locale = computed((): Locale => language.value === 'fa' ? fa_IR : en_US);
  const theme = computed(() => ({
    token: token.value,
    components: components.value,
    algorithm: algorithm.value,
    hashed: hashed.value,
    inherit: inherit.value,
  }));


  return { theme, componentSize, direction, locale }
})
