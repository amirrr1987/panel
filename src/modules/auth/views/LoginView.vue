<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
import { useAuthHead } from '../composables/useAuthHead'

useAuthHead()
</script>

<template>
  <LoginForm />
</template>
