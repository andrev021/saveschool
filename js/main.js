$(document).ready(function() {

  $(document).on('click', function(e) {
    const modalOpen = 'modal-open'
    const scrollLink = 'scroll-to'

    if (e.target.id === modalOpen) {
      const btnText = ($(e.target).text())
      $('#modal h2').text(btnText)
      openModal(e)
    } else if (e.target.dataset.close) {
      closeModal()
    } else if (e.target.id === scrollLink) {
      doScroll(e)
    }
  })

  function openModal(e) {
    $('#modal').removeClass('hidden');
    $('#modal').addClass('active');
  }

  function closeModal() {
    $('#modal').addClass('hidden');
    setTimeout(() => {
      $('#modal').removeClass('active');
    }, 300)
  }

  function doScroll(e) {
    e.preventDefault()
    const anchor = $(e.target).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 500);
  }
})