function validateInput() {
    
    const bookTitle = $('#bookTitle').val();
    if (bookTitle.trim() === '') {
        alert('Введите название книги.');
        return;
    }

    
    $('#dynamicTitle').text('Книга сохранена: ' + bookTitle);
}

$(document).ready(function(){
    


    
$('.slick______slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

});
