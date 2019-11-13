document.addEventListener("DOMContentLoaded", function () {
  site.init();
  $('.media .slider_product').slick({
    dots: true,
  });
  var widthDots = $('.media .slider_product .slick-dots').outerWidth();
  var marginSlick = widthDots + 10;
  console.log(marginSlick);

  // porque não funciona?
  $(".media .slider_product .slick-next").css("left:" + marginSlick + "px");
});

let site = {
  init: function () {
    console.log("rolando");
    site.buttonsListenner();
  },
  buttonsListenner: function () {
    var links = document.getElementsByTagName("a");
    for (var i in links) {
      links[i].onclick = function (e) {
        var href = this.href;
        site.toggleMenu();
      };
    }
  },
  toggleMenu: function () {
    let checkBoxInput = document.getElementById("checkBoxInput");
    checkBoxInput.checked = checkBoxInput.checked ? false : true;
  }
};
