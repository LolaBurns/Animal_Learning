$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var animal = parseInt($("#animal").val());

    if (animal === 1) {
      $('#Turtles').show();
    }
      else if (animal === 2) {
        $('#Snakes').show();
      }
      else {
        $('#Lizards').show();
      }
    event.preventDefault();
});

});
