import Swal from 'sweetalert2';
import "./modalSignUp.css";
import SNlogo from "../../../public/SN-logo.png";

const showAlert = () => {
    let timerInterval;

    Swal.fire({
        html: `
            <div class="custom-alert-content">
                <div class="contenedor-logo-alert"><img src="${SNlogo}"></div>
                <div class="contenedor-titulo-alert"><h2 class="titulo-alert">¡Registro Completado! </h2></div>
                <div class="contenedor-titulo-alert"><h3 class="titulo">Por favor inicie sesión</h3></div>
            </div>
        `,
        background: '#FFFF',
        timerProgressBar: true,
        showCloseButton: true, 
        timer: 3000,
        didOpen: () => {
            timerInterval = setInterval(() => {
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    });
};

export default showAlert;
