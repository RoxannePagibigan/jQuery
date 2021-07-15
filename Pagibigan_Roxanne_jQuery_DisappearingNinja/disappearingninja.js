$('img').click(function(){
    console.log("the image was clicked!")
    $(this).css('visibility', 'hidden')
})

$('#rstrButton').click(function(){
    console.log("the button was clicked!")
    $('img').css('visibility', 'visible')
})

// I wanted to use fadeOut but the other images keeps on moving.