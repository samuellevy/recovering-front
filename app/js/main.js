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
    site.hideModals();
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
  },
  hideModals: function() {
    $(".mask").hide();
    // $(".mask[data-id=modal-gallery]").show();
  }
};

let gallery = {
  init: function() {
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

    $(".send_project").click(function() {
      console.log("sending project");
    });

    $(".file_select").keydown(function() {
      return false;
    });

    $(".file_select").click(function() {
      $(".file_field").trigger("click");
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
  product_type: null,
  product: 0,
  init: function() {
    products.buttonsListenner();
    $(".modal_product[data-id=0]").addClass("active");
  },
  slick: function() {
    $(
      `.items-box[data-id="${products.product_type}"] .modal_product[data-id=${products.product}] .media .slider_product`
    ).slick({
      dots: true
    });
    var widthDots = $(
      `.items-box[data-id="${products.product_type}"] .modal_product[data-id=${products.product}] .media .slider_product .slick-dots`
    ).outerWidth();
    var marginSlick = widthDots + 10;
    $(
      `.items-box[data-id="${products.product_type}"] .modal_product[data-id=${products.product}] .media .slider_product .slick-next`
    ).css("left", marginSlick + "px");
  },
  unslick: function() {
    $(
      `.items-box[data-id="${products.product_type}"] .modal_product[data-id=${products.product}] .media .slider_product`
    ).slick("unslick");
  },
  buttonsListenner: function() {
    $(".pisos-btn").click(function() {
      const item_id = $(this).attr("data-id");
      products.product_type = item_id;
      $(`.items-box[data-id=${item_id}]`).addClass("active");
      products.slick();
    });

    $(".product_next_action").click(function() {
      products.unslick();
      const length = $(`.items-box[data-id="${products.product_type}"]`).find(".modal_product")
        .length;

      if (products.product < length - 1) {
        products.product++;
      } else {
        products.product = 0;
      }

      $(`.items-box[data-id="${products.product_type}"] .modal_product`).removeClass("active");
      $(
        `.items-box[data-id="${products.product_type}"] .modal_product[data-id="${products.product}"]`
      ).addClass("active");
      products.slick();
    });

    $(".product_back_action").click(function() {
      products.unslick();
      const length = $(`.items-box[data-id="${products.product_type}"]`).find(".modal_product")
        .length;

      if (products.product > 0) {
        products.product--;
      } else {
        products.product = length - 1;
      }

      $(`.items-box[data-id="${products.product_type}"] .modal_product`).removeClass("active");
      $(
        `.items-box[data-id="${products.product_type}"] .modal_product[data-id="${products.product}"]`
      ).addClass("active");
      products.slick();
    });

    $(".product_close_action").click(function() {
      // $(".modal_product").addClass("active");
      $(".items-box").removeClass("active");
      products.unslick();
    });
  }
};
