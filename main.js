$(document).ready(function() {
  $("#menu li a").on('click', function(event) {
    event.preventDefault()
    var page = $(this).data('page')
    $("#pages .page:not('.hide')").stop().fadeOut('fast', function() {
      $(this).addClass('hide')
      $('#pages .page[data-page="' + page + '"]').fadeIn('slow').removeClass('hide')
    })
  })
})
