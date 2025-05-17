export const channel = new BroadcastChannel("snackbar_channel");

// interface SnackbarMessage {
//   id: string;
//   type: "success" | "warning" | "error";
//   text: string;
//   duration: number;
// }

const SNACKBAR_TIMEOUT = 30000; // Default timeout for snackbars

const showSnackbar = (type: "success" | "warning" | "error", text: string, duration = SNACKBAR_TIMEOUT) => {
  const id = crypto.randomUUID(); // Unique ID for each snackbar
  channel.postMessage({ id, type, text, duration });
  return id;
};

export const showSuccessSnackbar = (text: string, duration?: number) => showSnackbar("success", text, duration);
export const showWarningSnackbar = (text: string, duration?: number) => showSnackbar("warning", text, duration);
export const showErrorSnackbar = (text: string, duration?: number) => showSnackbar("error", text, duration);

export const closeSnackbar = (id?: string) => {
  if (id) {
    channel.postMessage({ action: "close", id });
  } else {
    channel.postMessage({ action: "closeAll" });
  }
};
