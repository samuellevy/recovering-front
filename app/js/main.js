document.addEventListener("DOMContentLoaded", function() {
  site.init();
  gallery.init();
  foryou.init();
  about.init();
});

let site = {
  init: function() {
    console.log("rolando");
    site.buttonsListenner();
  },
  buttonsListenner: function() {
    var links = document.getElementsByTagName("a");
    for (var i in links) {
      links[i].onclick = function(e) {
        var href = this.href;
        site.toggleMenu();
      };
    }
  },
  toggleMenu: function() {
    let checkBoxInput = document.getElementById("checkBoxInput");
    checkBoxInput.checked = checkBoxInput.checked ? false : true;
  }
};

let gallery = {
  init: function() {
    console.log("gallery");
    gallery.buttonsListenner();
  },
  buttonsListenner: function() {
    $(".gallery_menu ul li").click(function() {
      let data_id = $(this).attr("data-id");
      let track = $(`.gallery_content .track[data-id=${data_id}]`);
      $(".gallery_content .track").removeClass("active");
      $(".gallery_menu ul li").removeClass("active");
      track.addClass("active");
      $(this).addClass("active");
    });
  }
};

let foryou = {
  init: function() {
    console.log("foryou");
    foryou.buttonsListenner();
  },
  buttonsListenner: function() {
    $(".foryou_menu ul li").click(function() {
      let data_id = $(this).attr("data-id");
      let track = $(`.foryou_content .track[data-id=${data_id}]`);
      $(".foryou_content .track").removeClass("active");
      $(".foryou_menu ul li").removeClass("active");
      track.addClass("active");
      $(this).addClass("active");
    });
  }
};

let about = {
  init: function() {
    $(".modal_product").hide();
    about.buttonsListenner();
  },
  buttonsListenner: function() {
    $(".about_action").click(function() {
      // $(".modal_product").addClass("active");
      $(".modal_product").fadeIn();
      $(".media .slider_product").slick({
        dots: true
      });
      var widthDots = $(".media .slider_product .slick-dots").outerWidth();
      var marginSlick = widthDots + 10;
      $(".media .slider_product .slick-next").css("left", marginSlick + "px");
    });
    $(".about_close_action").click(function() {
      // $(".modal_product").addClass("active");
      $(".modal_product").fadeOut();
    });
  }
};
