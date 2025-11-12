<script lang="ts" setup>
import { nextTick } from 'vue'
import { Button } from 'ant-design-vue/es'
import { useThemeStore } from '@/stores/theme.store'

const themeStore = useThemeStore()

function toggleTheme(event: MouseEvent) {
  // پشتیبانی از ViewTransition API
  const canTransition =
    // @ts-ignore
    document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!canTransition) {
    themeStore.isDark = !themeStore.isDark
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  // @ts-ignore
  const transition = document.startViewTransition(async () => {
    themeStore.isDark = !themeStore.isDark
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    const animation = document.documentElement.animate(
      {
        clipPath: themeStore.isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 550,
        easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
        pseudoElement: themeStore.isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
    animation.onfinish = () => transition.skipTransition?.()
  })
}
</script>

<template>
  <Button
    type="text"
    shape="circle"
    size="small"
    class="flex items-center justify-center bg-transparent border-none hover:scale-95 transition-transform duration-200"
    @click.stop="toggleTheme"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      class="w-6 h-6 transition-all duration-500 ease-in-out"
      :class="themeStore.isDark ? 'rotate-[360deg] text-white' : 'rotate-0 text-black'"
    >
      <mask id="moon-mask">
        <rect width="100%" height="100%" fill="white" />
        <circle cx="40" cy="8" r="11" fill="black" />
      </mask>

      <circle
        cx="12"
        cy="12"
        r="11"
        mask="url(#moon-mask)"
        class="fill-current transition-transform duration-700 ease-in-out"
        :class="themeStore.isDark ? 'scale-90' : 'scale-100'"
      />

      <g
        class="stroke-current stroke-2 origin-center transition-all duration-700 ease-in-out"
        :class="themeStore.isDark ? 'opacity-0 scale-75' : 'opacity-100 scale-100'"
      >
        <line x1="12" x2="12" y1="1" y2="3" />
        <line x1="12" x2="12" y1="21" y2="23" />
        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
        <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
        <line x1="1" x2="3" y1="12" y2="12" />
        <line x1="21" x2="23" y1="12" y2="12" />
        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
        <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
      </g>
    </svg>
  </Button>
</template>
