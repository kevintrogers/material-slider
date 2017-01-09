$(document).ready(function() {
var index=1, increaseIndex, decreaseIndex;

  increaseIndex = function() {
    index++;
    if (index === 4) 
      index=1;
    }
    
 
  decreaseIndex = function() {
    index--;
    if (index === 0) 
      index = 3;
 
  }
  
$('#right').click(function(){
  $('#slide' + index).toggleClass('inactive').toggleClass('active');
  increaseIndex();
  $('#slide' + index).toggleClass('active').toggleClass('inactive');
});
  
  $('#left').click(function(){
  $('#slide' + index).toggleClass('inactive');
  decreaseIndex();
  $('#slide' + index).toggleClass('inactive');
});

  });