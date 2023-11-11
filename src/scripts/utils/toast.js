import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const ToastComponent = {
  init({ text, status }) {
    Toastify({
      close: true,
      text: text,
      gravity: 'bottom',
      position: 'right',
      duration: 5000,
      className: status,
    }).showToast();
  }
}

export default ToastComponent;