console.log ('JS sourced');

$(document).ready(readyNow);

function readyNow(){
$('#GenerateBtn').on('click', generate);
$('#container').on('click', '#Swap', yellow);
$('#container').on('click', '#Delete', remove);
}

var clickCount = 1;

function generate(){
console.log('Generate Clicked');
  $('#container').append('<div class = "content"> </div>');
  $('.content').append('<p id="Number of Clicks">' + clickCount + '</p>');
clickCount += 1;
$('.content').append('<button id="Swap">Swap</button><button id="Delete">Delete</button>');

}//end generate

function yellow(){
  console.log('Swap Clicked');
$(this).parent().css("background-color", "yellow");
}

function remove(){
  console.log('Delete');
  $(this).parent().remove();
}
