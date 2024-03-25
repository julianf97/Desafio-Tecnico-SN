import Swal from 'sweetalert2';
import "./modal.css";
import SNlogo from "../../../../public/SN-logo.png";

const showModalVencer = (tramiteId) => {
    let timerInterval;

    Swal.fire({
      html: `
        <div class="custom-alert-content">
          <div class="contenedor-logo-alert"><img src="${SNlogo}"></div>
          <div class="contenedor-titulo-alert"><h2 class="titulo-alert">¿Estás seguro que quieres dar por vencido este trámite?</h2></div>
          <div class="conenedor-btns">
            <button id="btn-si" class="btn-si">Si</button>
            <button id="btn-no" class="btn-no">No</button>
          </div>
        </div>
      `,
      background: '#FFFF',
      showCloseButton: true, 
      didOpen: () => {
        const modalContainer = Swal.getContainer();
  
        modalContainer.querySelector('#btn-si').addEventListener('click', async () => {
          try {
            await fetch(`http://localhost:3000/api/gestionartramite/${tramiteId}/vencer`, {
              method: 'PUT',
            });
            window.location.reload();
          } catch (error) {
            console.error('Error al dar por vencido el trámite:', error);
          }
        });

        modalContainer.querySelector('#btn-no').addEventListener('click', () => {
          Swal.close();
        });
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
};

export default showModalVencer;
