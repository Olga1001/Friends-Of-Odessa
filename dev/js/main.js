$(document).ready(function () {
    // select
    $(".select-item").click(function () {
        $(this).closest(".select").toggleClass('active').find(".select-drop").slideToggle(300);
    });

    $(".select-option_link").click(function () {
       let langText = $(this).text();
       let langFlag = $(this).data("srcflag");
       
       $(this).closest(".select").removeClass('active').find(".select-drop").slideUp(300);

       $(this).closest(".select").find(".select-item_img").attr("src", langFlag);
       $(this).closest(".select").find(".select-item_span ").text(langText);

    });
 
});