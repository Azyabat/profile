import { message as showMessage } from "antd";

export const alertError = (message: string) => {
  showMessage.error(message);
};
