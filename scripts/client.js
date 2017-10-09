console.log ('JS sourced');

$(document).ready(readyNow);

function readyNow(){
$('#GenerateBtn').on('click', generate);
}

var clickCount = 1;

function generate(){
console.log('Generate Clicked');
  $('#container').append('<div id = "content"></div>');
  $('#content').append('<p id="Number of Clicks">' + clickCount + '</p>');
clickCount += 1;
$('#content').append('<button id="Swap">Swap</button><button id="Delete">Delete</button>');

}//end generate
