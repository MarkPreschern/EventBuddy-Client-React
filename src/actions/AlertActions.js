export const SHOW_ALERT = "SHOW_ALERT";
export const showAlert = (message) => ({
    type: SHOW_ALERT,
    message: message
});

export const CLOSE_ALERT = "CLOSE_ALERT";
export const closeAlert = () => ({
    type: CLOSE_ALERT,
});