"use strict";

$(document).ready(function () {
  // select
  $(".select-item").click(function () {
    $(this).closest(".select").toggleClass('active').find(".select-drop").slideToggle(300);
  });
  $(".select-option_link").click(function () {
    var langText = $(this).text();
    var langFlag = $(this).data("srcflag");
    $(this).closest(".select").removeClass('active').find(".select-drop").slideUp(300);
    $(this).closest(".select").find(".select-item_img").attr("src", langFlag);
    $(this).closest(".select").find(".select-item_span ").text(langText);
  }); // burger, menu

  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navtop").toggleClass('active');
  });
});