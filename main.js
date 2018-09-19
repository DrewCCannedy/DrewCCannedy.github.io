$(document).ready(() => {
    $(".music").hover(() => {
      $("body").css("background", "#DB3340");
      $(".music").css("color", "#ffffff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".music").css("color", "#DB3340");
      $("h1").css("color", "#000000");
    });
  
    $(".eternal-descent").hover(() => {
      $("body").css("background", "#E8B71A");
      $(".eternal-descent").css("color", "#fff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".eternal-descent").css("color", "#E8B71A");
      $("h1").css("color", "#000000");
    });
  
    $(".coding").hover(() => {
      $("body").css("background", "#1FDA9A");
      $(".coding").css("color", "#fff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".coding").css("color", "#1FDA9A");
      $("h1").css("color", "#000000");
    });
  
    $(".social").hover(() => {
      $("body").css("background", "#28ABE3");
      $(".social").css("color", "#fff");
      $("h1").css("color", "#ffffff");
    }, () => {
      $("body").css("background", "#ffffff");
      $(".social").css("color", "#28ABE3");
      $("h1").css("color", "#000000");
    });
  });