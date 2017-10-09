console.log ('JS sourced');

$(document).ready(readyNow);

function readyNow(){
$('#GenerateBtn').on('click', generate);
}

var clickCount = 0;

function generate(){
console.log('Generate Clicked');
  $('#container').append('<div id = "content"></div>');
  $('#content').append('<p id="Number of Clicks">' + clickCount + '</p>');
clickCount += 1;


}
