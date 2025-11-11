import { ref } from 'vue'

export const useModal = () => {
  const open = ref(false)
  const openModal = () => {
    open.value = true
  }
  const closeModal = () => {
    open.value = false
  }
  return { open, openModal, closeModal }
}
