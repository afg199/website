$('#ModalPhoto').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var photo = button.data('photo') 
    var modal = $(this)
    modal.find('.img-fluid').attr("src", "img/" + photo + ".jpg")
 })