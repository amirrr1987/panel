<template>
  <Form layout="vertical" class="settings">
    <FormItem :label="$t('colorPrimary')" name="colorPrimary">
      <RadioGroup v-model:value="themeStore.token.colorPrimary">
        <Tooltip v-for="(color, key) in colors" :key="color.oklch" :title="key">
          <RadioButton
            :value="color.hex"
            :style="{
              backgroundColor: color.hex,
            }"
          />
        </Tooltip>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('radius')" name="borderRadius">
      <InputNumber
        v-model:value="themeStore.token.borderRadius"
        :min="0"
        :max="18"
        :step="2"
        default-value="6"
      />
    </FormItem>
    <FormItem :label="$t('theme')" name="isDark">
      <RadioGroup v-model:value="themeStore.isDark">
        <Tooltip :title="$t('dark')">
          <RadioButton :value="true" class="inline-flex! items-center justify-center">
            <Icon
              icon="mdi:weather-night"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
        <Tooltip :title="$t('light')">
          <RadioButton :value="false" class="inline-flex! items-center justify-center">
            <Icon
              icon="mdi:weather-sunny"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('isCompact')" name="isCompact">
      <RadioGroup v-model:value="themeStore.isCompact">
        <Tooltip :title="$t('compact')">
          <RadioButton :value="true" class="inline-flex! items-center justify-center">
            <Icon
              icon="icon-park-outline:compression"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
        <Tooltip :title="$t('default')">
          <RadioButton :value="false" class="inline-flex! items-center justify-center">
            <Icon
              icon="icon-park-outline:align-text-left-one"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('compactSize')" name="componentSize">
      <RadioGroup v-model:value="themeStore.componentSize">
        <Tooltip :title="$t('small')">
          <RadioButton value="small" class="inline-flex! items-center justify-center">
            <Icon
              icon="mdi:size-s"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
        <Tooltip :title="$t('middle')">
          <RadioButton value="middle" class="inline-flex! items-center justify-center">
            <Icon
              icon="mdi:size-m"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
        <Tooltip :title="$t('large')">
          <RadioButton value="large" class="inline-flex! items-center justify-center">
            <Icon
              icon="mdi:size-l"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('direction')" name="direction">
      <RadioGroup v-model:value="themeStore.direction">
        <Tooltip :title="$t('ltr')">
          <RadioButton value="ltr" class="inline-flex! items-center justify-center">
            <Icon
              icon="lineicons:direction-ltr"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
        <Tooltip :title="$t('rtl')">
          <RadioButton value="rtl" class="inline-flex! items-center justify-center">
            <Icon
              icon="lineicons:direction-rtl"
              :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
            />
          </RadioButton>
        </Tooltip>
      </RadioGroup>
    </FormItem>

    <FormItem :label="$t('language')" name="language">
      <RadioGroup v-model:value="themeStore.language">
        <RadioButton value="fa" class="inline-flex! items-center justify-center">
          <Icon
            icon="emojione-v1:flag-for-iran"
            :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
          />
        </RadioButton>
        <RadioButton value="en" class="inline-flex! items-center justify-center">
          <Icon
            icon="emojione-v1:flag-for-united-states"
            :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
          />
        </RadioButton>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('transition')" name="transition">
      <RadioGroup v-model:value="themeStore.transition">
        <RadioButton
          v-for="transition in transitionConfig"
          :key="transition.name"
          :value="transition.name"
          class="inline-flex! items-center justify-center"
        >
          <Icon
            :icon="transition.icon"
            :style="{ fontSize: (themeStore.token?.fontSize ?? 14) * 1.68 + 'px' }"
          />
        </RadioButton>
      </RadioGroup>
    </FormItem>
  </Form>
</template>
<script setup lang="ts">
import { colors } from '@/config/color.config'
import { useThemeStore } from '@/stores/theme.store'
import { Icon } from '@iconify/vue'
import { Form, FormItem, InputNumber, RadioButton, RadioGroup, Tooltip } from 'ant-design-vue/es'
import { transitionConfig } from '@/config/transation.config'
const themeStore = useThemeStore()
</script>
<style lang="less"></style>
