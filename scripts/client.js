console.log ('JS sourced');

$(document).ready(readyNow);

function readyNow(){
$('#GenerateBtn').on('click', generate);
$('.container').on('click', '#Swap', yellow);
$('.container').on('click', '#Delete', remove);
}

var clickCount = 1;

function generate(){
console.log('Generate Clicked');
  $('.container').append('<div class = "rectangle"> <p id="Number of Clicks">' + clickCount + '</p> <button id="Swap">Swap</button><button id="Delete">Delete</button> </div>');
clickCount += 1;
}//end generate


function yellow(){
  console.log('Swap Clicked');
$(this).parent().css("background-color", "yellow");
}

function remove(){
  console.log('Delete');
  $(this).parent().remove();
}
