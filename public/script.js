console.log(window.location.href)

$('.cb').click(function () {
    console.log(this.id);

    if (this.checked) {
        $('.td').eq(this.id).addClass('strike');
    } else {
        $('.td').eq(this.id).removeClass('strike');        
    }

})