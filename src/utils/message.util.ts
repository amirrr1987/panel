import { App } from 'ant-design-vue/es';
import type { MessageInstance } from 'ant-design-vue/es/message/interface';

// Global message instance that will be set from App component
let messageApi: MessageInstance | null = null;

export const setMessageApi = (api: MessageInstance) => {
  messageApi = api;
};

export const getMessageApi = (): MessageInstance => {
  if (!messageApi) {
    // Fallback to static message if not initialized
    const { message } = App.useApp();
    return message;
  }
  return messageApi;
};
