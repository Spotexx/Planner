let currentTime = moment();
$('#currentDay').text(currentTime.format('dddd, MMMM Do'));

//stores array of notes to local storage
$("form").submit(function (event) {
    event.preventDefault();
    let array = [];
    $('input').each(function (index, element) {
        array.push(element.value);
    });
    localStorage.setItem('array', JSON.stringify(array));
});

// loads arrays into text fields on load then feeds background color depending on current time(grey, red, green)
let array = JSON.parse(localStorage.getItem('array'));
$('input').each(function (index, element) {
    element.value = array[index];
    //applies backgroudn color depending on time
    if (parseInt(currentTime.format('H')) > index + 9) {
        element.style.backgroundColor = 'lightgrey';
    }
    else if (parseInt(currentTime.format('H')) === index + 9) {
        element.style.backgroundColor = 'pink';
    }
    else if (parseInt(currentTime.format('H')) < index + 9) {
        element.style.backgroundColor = 'lightgreen';
    }
});

