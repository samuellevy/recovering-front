document.addEventListener("DOMContentLoaded", function() {
  site.init();
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
