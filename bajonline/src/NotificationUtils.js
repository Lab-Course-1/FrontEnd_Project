import { Store } from "react-notifications-component";

export const showSuccessNotification = (title, message, duration) => {
  Store.addNotification({
    title: title,
    message: message,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: duration,
    },
  });
};

export const showErrorNotification = (title, message, duration) => {
  Store.addNotification({
    title: title,
    message: message,
    type: "error",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: duration,
    },
  });
};

export const showWarningNotification = (title, message, duration) => {
  Store.addNotification({
    title: title,
    message: message,
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: duration,
    },
  });
};
