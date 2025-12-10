<template>
  <Modal v-model:open="open" title="Create Payment" @cancel="cancel" @ok="ok">
    <Form
      ref="form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      :model="form"
      layout="vertical"
    >
      <FormItem label="Amount" name="amount">
        <RangePicker class="w-full" />
      </FormItem>
      <FormItem label="Amount" name="amount">
        <InputNumber decimal-separator="." type="number" addon-after="$" :controls="false" class="w-full" />
      </FormItem>
    </Form>
  </Modal>
</template>
<script setup lang="ts">
import { Modal, Form, FormItem, InputNumber, RangePicker } from 'ant-design-vue/es'
import { ref, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import dayjs, { type Dayjs } from 'dayjs'

const { t } = useTranslation()
const open = defineModel<boolean>('open', { required: true })
interface FormData {
  amount: number
  date: Dayjs
}
const form = ref<FormData>({
  amount: 0,
  date: dayjs(),
})

const cancel = () => {
  open.value = false
}

const ok = () => {
  onFinish()
}

const onFinish = () => {
  console.log('onFinish')
}

const onFinishFailed = () => {
  watch(
    open,
    (newVal) => {
      if (newVal === false) {
        form.value = {
          amount: 0,
        }
      }
    },
    { immediate: true },
  )
}
</script>
