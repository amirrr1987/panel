<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store'
import { useFullscreen } from '@vueuse/core'
import {
  Button,
  Divider,
  Drawer,
  Dropdown,
  LayoutHeader,
  Menu,
  MenuDivider,
  MenuItem,
  Tooltip,
} from 'ant-design-vue/es'
import { nextTick, computed, ref, watch } from 'vue'
import TheSettings from './components/TheSettings.vue'
import { useTourStore } from '@/stores/tour.store'
import { getElement } from '@/utils'
import { useTranslation } from 'i18next-vue'
import {
  UserOutlined,
  HistoryOutlined,
  LogoutOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons-vue'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const { t } = useTranslation()
const router = useRouter()
const open = ref(false)
const tourStore = useTourStore()
const themeStore = useThemeStore()
const authStore = useAuthStore()
const placement = computed(() => {
  return themeStore.direction === 'rtl' ? 'left' : 'right'
})

const { isFullscreen, toggle } = useFullscreen()

watch(
  () => tourStore.current,
  async (newCurrent) => {
    if (newCurrent === 4 && tourStore.open) {
      await nextTick()
      open.value = true
      await new Promise((resolve) => setTimeout(resolve, 300))
    } else if (newCurrent !== 4 && open.value) {
      open.value = false
    }
  },
  { immediate: true },
)

watch(
  () => tourStore.open,
  (isOpen) => {
    if (!isOpen && open.value) {
      open.value = false
    }
  },
)
</script>

<template>
  <LayoutHeader class="flex items-center justify-between px-8!">
    <div>
      <img src="@/assets/images/logo-3.webp" alt="logo" class="h-12" />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Dropdown>
          <Button type="text" class="text-primary! flex! items-center justify-center">
            <template #icon>
              <UserOutlined />
            </template>
          </Button>
          <template #overlay>
            <Menu>
              <MenuItem @click="router.push({ name: 'TheProfile' })">
                <template #icon>
                  <UserOutlined />
                </template>
                {{ t('profile') }}
              </MenuItem>
              <MenuItem>
                <template #icon>
                  <HistoryOutlined />
                </template>
                {{ t('history') }}
              </MenuItem>
              <MenuDivider />
              <MenuItem danger @click="authStore.logout()">
                <template #icon>
                  <LogoutOutlined />
                </template>
                {{ t('logout') }}
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
        <Divider type="vertical" />

        <Tooltip :title="isFullscreen ? t('fullScreenExit') : t('fullscreen')">
          <Button
            type="text"
            class="text-primary! flex! items-center justify-center"
            @click="toggle"
          >
            <template #icon>
              <FullscreenOutlined v-if="!isFullscreen" />
              <FullscreenExitOutlined v-else />
            </template>
          </Button>
        </Tooltip>

        <Divider type="vertical" />

        <Tooltip :title="t('settings')">
          <Button
            type="text"
            class="text-primary! flex! items-center justify-center"
            @click="open = true"
          >
            <template #icon>
              <SettingOutlined />
            </template>
          </Button>
        </Tooltip>
        <Drawer
          v-model:open="open"
          :title="t('settings')"
          :placement="placement"
          :ref="(el) => (tourStore.settingsRef = getElement(el) || undefined)"
        >
          <TheSettings />
        </Drawer>
        <Divider type="vertical" />
        <Tooltip :title="t('panelGuide')">
          <Button
            type="text"
            class="text-primary! flex! items-center justify-center"
            @click="tourStore.open = true"
          >
            <template #icon>
              <InfoCircleOutlined />
            </template>
          </Button>
        </Tooltip>
      </div>
    </div>
  </LayoutHeader>
</template>
