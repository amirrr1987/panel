import type { ItemType } from 'ant-design-vue'
import { h } from 'vue'
import { Icon } from '@iconify/vue'
import { useTranslation } from 'i18next-vue'

export function getMenuItems(): ItemType[] {
  const { t } = useTranslation()
  return [
    { key: 'TheDashboard', label: t('menu.dashboard'), icon: h(Icon, { icon: 'mdi:home' }) },
    {
      key: 'UsersList',
      label: t('menu.users'),
      icon: h(Icon, { icon: 'mdi:users' }),
      children: [
        { key: 'UsersList', label: t('menu.users'), icon: h(Icon, { icon: 'mdi:users' }) },
      ],
    },
  ]
}
