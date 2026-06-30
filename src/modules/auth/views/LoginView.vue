<script setup lang="ts">
import type { RuleObject } from "ant-design-vue/es/form";
import Button from "ant-design-vue/es/button";
import Form from "ant-design-vue/es/form";
import FormItem from "ant-design-vue/es/form/FormItem";
import Input from "ant-design-vue/es/input";
import { InputPassword } from "ant-design-vue/es/input";
import { computed, h } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthLogin } from "../composables/useAuthLogin";
import { LoginOutlined, LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import type { ILoginRequestDTO } from "@/api/data-contracts";


const { t } = useI18n();
const { form, mutateAsync, isPending } = useAuthLogin();

const rules = computed<Record<keyof ILoginRequestDTO, RuleObject[]>>(() => ({
  captchaId: [{ required: true, message: t("auth.login.captchaIdRequired") }],
  captchaInput: [{ required: true, message: t("auth.login.captchaInputRequired") }],
  isActiveDirectory: [{ required: true, message: t("auth.login.isActiveDirectoryRequired") }],
  password: [{ required: true, message: t("auth.login.passwordRequired") }],
  username: [{ required: true, message: t("auth.login.usernameRequired") }],
}));
</script>

<template>

  <Form
    layout="vertical"
    :model="form"
    :rules="rules"
    @finish="mutateAsync"
    :disabled="isPending"
  >
    <legend class="text-center  pb-4!">ورود به سامانه</legend>
    <FormItem
      :label="t('auth.login.username')"
      name="username"
      help="نام کاربری الزامی است"
      extra="نام کاربری الزامی است"
      

    >
      <Input
        v-model:value="form.username"
        autocomplete="username"
        :addonBefore="h(UserOutlined)"
        
      />
    </FormItem>
    <FormItem
      :label="t('auth.login.password')"
      name="password"
    >
      <InputPassword
        v-model:value="form.password"
        autocomplete="current-password"
        :addonBefore="h(LockOutlined)"
      >
      </InputPassword>
    </FormItem>

    <FormItem>
      <Button
        type="primary"
        html-type="submit"
        block
        :loading="isPending"
      >
        <template #icon>
          <LoginOutlined />
        </template>
        {{ t("auth.login.submit") }}
      </Button>
    </FormItem>
  </Form>
</template>
