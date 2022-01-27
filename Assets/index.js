$('#currentDay').text(moment().format('dddd, MMMM Do'));


//color code each time block based on past, present, or future grey, red, green
//add event listener to each time block to add event to local storage

//holds every text input value in an array

$( "form" ).submit(function( event ) {
    event.preventDefault();
    console.log('form submitted');
    let array = [];
    $('input').each(function(index, element) {
        array.push(element.value);
    });
    console.log(array);
    localStorage.setItem('array', JSON.stringify(array));
});
