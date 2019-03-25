'use strict';
// create a function that logs that the app loaded to the console and calls the submit

// prints out in multiples of 3 unless input is 3

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
  //display the results section
  $('.results').removeClass('hidden');
}

// create a function that will GET the endpoint url and display to the user
function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Sorry, no luck! Try a different breed!'));
}


// create a function that handles the submit button and calls the image
function handleSubmit() {
  $('form').submit(function(event) {
    event.preventDefault();
    const breed= $(this).find("[name='breed']").val();
    getDogImage(breed);
    $(this).find("[name='breed']").val('');
  }
  );
}

$(function() {
  console.log('App loaded, waiting for submit!');
  handleSubmit();
});