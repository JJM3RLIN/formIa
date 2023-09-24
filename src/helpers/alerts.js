import Swal from 'sweetalert2'
function alerta(mensaje, icono) {
    Swal.fire({
        position: 'center',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })
}
export default alerta