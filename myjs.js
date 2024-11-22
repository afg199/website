// Script para mostrar un modal dinámico con imágenes
$('#ModalPhoto').on('show.bs.modal', function (event) {
    // Obtén el botón que activó el modal
    var button = $(event.relatedTarget);
    // Extrae el nombre de la foto desde el atributo data-photo
    var photo = button.data('photo');
    // Encuentra el modal actual
    var modal = $(this);
    // Cambia el atributo src de la imagen dentro del modal
    modal.find('.img-fluid').attr("src", "img/" + photo + ".jpg");
});
