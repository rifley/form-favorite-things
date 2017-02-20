$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputOne = $("#dog").val();
    var inputTwo = $("#color").val();
    var inputThree = $("#week").val();
    var inputFour = $("#dogColor").val();
    var inputFive = $("#music").val();

    var array = [inputOne, inputTwo, inputThree, inputFour, inputFive];
    var newArray = array.slice();
    newArray.push(array[1]);
    newArray.push(array[0]);
    newArray.push(array[2]);
    // var newTwo = array[0];
    // var newThree = array[2];
    // var newArray = [newOne, newTwo, newThree];
    $("#result").append("<li>"+newArray[0]+"</li>");
    $("#result").append("<li>"+newArray[1]+"</li>");
    $("#result").append("<li>"+newArray[2]+"</li>");
    $("#result").append("<li>"+newArray[3]+"</li>");
    $("#result").append("<li>"+newArray[4]+"</li>");
    $("#result").append("<li>"+newArray[5]+"</li>");
    $("#result").append("<li>"+newArray[6]+"</li>");
    $("#result").append("<li>"+newArray[7]+"</li>");
    console.log(newArray);
  })
});
