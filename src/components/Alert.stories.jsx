import CustomAlert from "./Alert";

export default {
  component: CustomAlert,
  title: "Alert",
  tags: ["autodocs"],
};

export const Success = {
  args: {
    content: "This is a success alert",
    severity: "success",
  },
};

export const Error = {
  args: {
    content: "This is an error alert",
    severity: "error",
  },
};

export const Information = {
  args: {
    content: "This is an info alert",
    severity: "info",
  },
};
