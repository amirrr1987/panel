<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { RuleObject } from "ant-design-vue/es/form";
import {
  Alert,
  Button,
  Card,
  Form,
  FormItem,
  Input,
  InputPassword,
  TypographyTitle,
  TypographyText,
} from "ant-design-vue/es";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import { useAuthLogin } from "../composables/useAuthLogin";
import { normalizeBranchCode } from "../utils/auth.util";
import type { ILoginReq } from "../models/auth.type";
import { LoadingOutlined } from "@ant-design/icons-vue";
const { t } = useI18n();
const { form, submitting, errorMessage, submit } = useAuthLogin();

const rules = computed<Record<keyof ILoginReq, RuleObject[]>>(() => ({
  branchCode: [{ required: true, message: t("auth.login.branchCodeRequired") }],
  username: [
    { required: true, message: t("auth.login.usernameRequired") },
    { min: 5, message: t("auth.login.usernameMin") },
  ],
  password: [
    { required: true, message: t("auth.login.passwordRequired") },
    { min: 6, message: t("auth.login.passwordMin") },
  ],
}));

function onBranchCodeUpdate(value: string) {
  form.value.branchCode = normalizeBranchCode(value);
}
</script>

<template>
  <Alert v-if="errorMessage" type="error" :message="errorMessage" show-icon />

  <Form layout="vertical" :model="form" :rules="rules" @finish="submit">
    <FormItem :label="t('auth.login.branchCode')" name="branchCode">
      <Input
        :value="form.branchCode"
        autocomplete="organization"
        @update:value="onBranchCodeUpdate"
      >
        <template #prefix>
          <Icon icon="mdi:office-building-outline" class="text-black/45" />
        </template>
      </Input>
    </FormItem>

    <FormItem :label="t('auth.login.username')" name="username">
      <Input v-model:value="form.username" autocomplete="username">
        <template #prefix>
          <Icon icon="mdi:account-outline" class="text-black/45" />
        </template>
      </Input>
    </FormItem>

    <FormItem :label="t('auth.login.password')" name="password">
      <InputPassword v-model:value="form.password" autocomplete="current-password">
        <template #prefix>
          <Icon icon="mdi:lock-outline" class="text-black/45" />
        </template>
      </InputPassword>
    </FormItem>

    <Button type="primary" html-type="submit" block :loading="submitting" >
        <template #icon>
          <!-- <Icon icon="mdi:login" /> -->
           <LoadingOutlined />
        </template>
        {{ t("auth.login.submit") }}
    </Button>
  </Form>
</template>
