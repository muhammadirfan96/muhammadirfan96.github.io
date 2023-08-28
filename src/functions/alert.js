import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const successAlert = (text) => {
  MySwal.fire({
    icon: "success",
    title: "Sukses",
    text: text,
  });
};

export const errorAlert = (text) => {
  MySwal.fire({
    icon: "error",
    title: "Error",
    text: text,
  });
};

export const warningAlert = (text, next) => {
  MySwal.fire({
    icon: "warning",
    title: "Peringatan",
    text: text,
  }).then((result) => {
    if (result.isConfirmed) {
      next();
    }
  });
};

export const infoAlert = (text) => {
  MySwal.fire({
    icon: "info",
    title: "Info",
    text: text,
  });
};

export const questionAlert = (text, confirmed, calceled) => {
  MySwal.fire({
    icon: "question",
    title: "konfirmasi",
    text: text,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      confirmed();
    } else {
      calceled();
    }
  });
};
