import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'

describe('Auth', () => {
  it('mounts and renders router outlet', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { template: '<div>Auth</div>' } }],
    })

    const wrapper = mount(AuthLayout, {
      global: { plugins: [router] },
    })

    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
