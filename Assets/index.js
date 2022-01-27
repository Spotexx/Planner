$('#currentDay').text(moment().format('dddd, MMMM Do'));

//stores array of notes to local storage
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

// loads arrays into text fields on load
let array = JSON.parse(localStorage.getItem('array'));
$('input').each(function(index, element) {
    element.value = array[index];
});
