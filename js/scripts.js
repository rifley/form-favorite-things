$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var arrays = ["dog", "color", "week", "dogColor", "music"];

    arrays.forEach(function(array) {
      var finalArray = $("input#" + array).val();
      $("#result").append("<li>"+finalArray+"</li>");
    });

  })
});
