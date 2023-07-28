import { toast } from "react-toastify";

export const customToast = {
  success(msg, options = {}) {
    return toast(msg, {
      ...options,
      style: {
        backgroundColor: "#66bb6a",
        width: "auto",
        height: "68px",
        borderRadius: "10px",
        color: "#242424",
        textAlign: "center",
        fontFamily: "Cadiz",
      },
    });
  },
  error(msg, options = {}) {
    return toast(msg, {
      ...options,
      style: {
        backgroundColor: "#ef5350",
        width: "auto",
        height: "68px",
        borderRadius: "10px",
        color: "#242424",
        textAlign: "center",
        fontFamily: "Cadiz",
      },
    });
  },
};
