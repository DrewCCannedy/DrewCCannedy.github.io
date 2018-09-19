$(document).ready(() => {
    $(".music").hover(() => {
      $("body").css("background", "#990000");
      $(".music").css("color", "#ffffff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".music").css("color", "#990000");
      $("h1").css("color", "#000000");
    });
  
    $(".eternal-descent").hover(() => {
      $("body").css("background", "#4d004d");
      $(".eternal-descent").css("color", "#fff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".eternal-descent").css("color", "#4d004d");
      $("h1").css("color", "#000000");
    });
  
    $(".coding").hover(() => {
      $("body").css("background", "#000066");
      $(".coding").css("color", "#fff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".coding").css("color", "#000066");
      $("h1").css("color", "#000000");
    });
  
    $(".social").hover(() => {
      $("body").css("background", "#1aa3ff");
      $(".social").css("color", "#fff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".social").css("color", "##1aa3ff");
      $("h1").css("color", "#000000");
    });
  });