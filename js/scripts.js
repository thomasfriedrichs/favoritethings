$(document).ready(function () {
  $("#form").submit(function (e) { 
    const favorite1 = $("#favorite1").val();
    const favorite2 = $("#favorite2").val();
    const favorite3 = $("#favorite3").val();
    let favoriteThings = [favorite1, favorite2, favorite3];
    let display = [];
    display.push(favoriteThings[0]);
    display.push(favoriteThings[1]);
    display.push(favoriteThings[2]);
    $("#f1").text(display[1]);
    $("#f2").text(display[0]);
    $("#f3").text(display[2]);
    $(".display").show();
    //console.log(display);
    e.preventDefault();
  });
});