import Alert from "./Alert";

export default {
  component: Alert,
  title: "Alert",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    alert: {
      id: "1",
      title: "Test Alert",
      state: "ALERT_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    alert: {
      ...Default.args.alert,
      state: "ALERT_PINNED",
    },
  },
};

export const Archived = {
  args: {
    alert: {
      ...Default.args.alert,
      state: "ALERT_ARCHIVED",
    },
  },
};
