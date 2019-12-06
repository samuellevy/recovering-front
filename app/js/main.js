document.addEventListener("DOMContentLoaded", function() {
  site.init();
  gallery.init();
  foryou.init();
  products.init();
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

let products = {
  product_type: 0,
  product: 0,
  init: function() {
    products.buttonsListenner();
    $(".modal_product[data-id=0]").addClass("active");
    this.startSlick();
  },
  startSlick: function() {
    $(".modal_product[data-id=0] .media .slider_product").slick({
      dots: true
    });
    var widthDots = $(
      `.modal_product[data-id=${products.product}] .media .slider_product .slick-dots`
    ).outerWidth();
    var marginSlick = widthDots + 10;
    $(`.modal_product[data-id=${products.product}] .media .slider_product .slick-next`).css(
      "left",
      marginSlick + "px"
    );
  },
  buttonsListenner: function() {
    $(".pisos-btn").click(function() {
      const item_id = $(this).attr("data-id");
      $(`.items-box[data-id=${item_id}]`).addClass("active");
    });

    $(".about_action").click(function() {
      // $(".modal_product").addClass("active");
      $(".modal_product[data-id=0]").fadeIn();
      $(".modal_product[data-id=0] .media .slider_product").slick({
        dots: true
      });
      var widthDots = $(
        `.modal_product[data-id=${products.i}] .media .slider_product .slick-dots`
      ).outerWidth();
      var marginSlick = widthDots + 10;
      $(`.modal_product[data-id=${products.i}] .media .slider_product .slick-next`).css(
        "left",
        marginSlick + "px"
      );
    });

    $(".about_back_action").click(function() {
      console.log(products.total);
      if (products.i > 0) {
        products.i--;
      } else {
        products.i = $(".modal_product").length - 1;
      }
      $(".modal_product").hide();
      $(`.modal_product[data-id=${products.i}]`).fadeIn();
      $(`.modal_product[data-id=${products.i}] .media .slider_product`).slick({
        dots: true
      });
      var widthDots = $(
        `.modal_product[data-id=${products.i}] .media .slider_product .slick-dots`
      ).outerWidth();
      var marginSlick = widthDots + 10;
      $(`.modal_product[data-id=${products.i}] .media .slider_product .slick-next`).css(
        "left",
        marginSlick + "px"
      );
    });

    $(".about_next_action").click(function() {
      console.log(products.total);
      if (products.i < $(".modal_product").length - 1) {
        products.i++;
      } else {
        products.i = 0;
      }
      $(".modal_product").hide();
      $(`.modal_product[data-id=${products.i}]`).fadeIn();
      $(`.modal_product[data-id=${products.i}] .media .slider_product`).slick({
        dots: true
      });
      var widthDots = $(
        `.modal_product[data-id=${products.i}] .media .slider_product .slick-dots`
      ).outerWidth();
      var marginSlick = widthDots + 10;
      $(`.modal_product[data-id=${products.i}] .media .slider_product .slick-next`).css(
        "left",
        marginSlick + "px"
      );
    });

    $(".about_close_action").click(function() {
      // $(".modal_product").addClass("active");
      $(".items-box").removeClass("active");
    });
  }
};
