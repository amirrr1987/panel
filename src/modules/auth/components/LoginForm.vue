<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { RuleObject } from "ant-design-vue/es/form";
import { Alert, Form, FormItem, Input, InputPassword } from "ant-design-vue/es";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import { useAuthLogin } from "../composables/useAuthLogin";
import type { ILoginReq } from "../models/auth.type";

const { t } = useI18n();
const { form, mutateAsync, isPending, isError, error } = useAuthLogin();

const rules = computed<Record<keyof ILoginReq, RuleObject[]>>(() => ({
  captchaId: [{ required: true, message: t("auth.login.captchaIdRequired") }],
  captchaInput: [{ required: true, message: t("auth.login.captchaInputRequired") }],
  isActiveDirectory: [{ required: true, message: t("auth.login.isActiveDirectoryRequired") }],
  username: [
    { required: true, message: t("auth.login.usernameRequired") },
    { min: 5, message: t("auth.login.usernameMin") },
  ],
  password: [
    { required: true, message: t("auth.login.passwordRequired") },
    { min: 6, message: t("auth.login.passwordMin") },
  ],
}));
</script>

<template>
  <Alert v-if="isError" type="error" :message="error?.message" show-icon />

  <Form layout="vertical" :model="form" :rules="rules" @finish="mutateAsync">
    <FormItem :label="t('auth.login.branchCode')" name="branchCode">
      <Input v-model:value="form.captchaId">
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

    <Alert v-if="isError" type="error" :message="error?.message" class="mb-4" show-icon closable />

    <Form layout="vertical" :model="form" :rules="rules" @finish="mutateAsync">
      <FormItem :label="t('auth.login.branchCode')" name="branchCode">
        <Input v-model:value="form.captchaInput" autocomplete="organization">
          <template #prefix>
            <Icon icon="mdi:office-building-outline" class="text-black/45" />
          </template>
        </Input>
      </FormItem>
    </Form>

    <FormItem :label="t('auth.login.password')" name="password">
      <InputPassword v-model:value="form.password" autocomplete="current-password">
        <template #prefix>
          <Icon icon="mdi:lock-outline" class="text-black/45" />
        </template>
      </InputPassword>
    </FormItem>

    <Button type="primary" html-type="submit" block :loading="isPending">
      <template #icon>
        <Icon icon="mdi:login" />
      </template>
      {{ t("auth.login.submit") }}
    </Button>
  </Form>
</template>
