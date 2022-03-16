var openside = document.getElementById("openside");

var x = document.getElementById("sidebar");
x.style.left = "-100%";
openside.addEventListener("click", function() {
  if (x.style.left == "-100%") {
    x.style.left = "0%";
  } else {
    x.style.left = "-100%";
  }
});

scrollup.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onkeyup = function() {
  if (event.which == 83) {
    alert("find id - scoring - the use tab");
  }
};

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var bread = document.getElementById("bread");
    var magt = this.document.getElementById("magtitle");
    var magt2 = document.getElementById("magtitle2");
    var navcon = this.document.getElementById("navcon");
    if (magt == null && magt2 == null) {
      bread.style.visibility = "visible";
      bread.style.width = "80%";
      navcon.style.fontSize = "15px";
    } else {
      var magte = this.document.getElementById("magtitlee");
      magte.style.width = "100%";

      bread.style.visibility = "visible";
      bread.style.width = "80%";
      magt.style.width = "100%";
      magt2.style.height = "0px";
      magt2.style.padding = "0%";
      navcon.style.fontSize = "15px";
    }
    scrollup.style.display = "flex";
    icofb.style.display = "block";
    icoln.style.display = "block";
    icogm.style.display = "block";
  } else {
    var bread = document.getElementById("bread");
    var magt = this.document.getElementById("magtitle");
    var magt2 = document.getElementById("magtitle2");
    var navcon = this.document.getElementById("navcon");

    if (magt == null && magt2 == null) {
      bread.style.width = "0%";
      bread.style.visibility = "hidden";
      navcon.style.fontSize = "20px";
    } else {
      var magte = this.document.getElementById("magtitlee");
      magte.style.width = "0%";

      bread.style.width = "0%";
      bread.style.visibility = "hidden";
      magt.style.width = "0%";
      magt2.style.height = "160px";
      magt2.style.padding = "1.5%";
      navcon.style.fontSize = "20px";
    }
    //alert("2");
    scrollup.style.display = "none";
  }
  //detect if the user is at the buttom page
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    icofb.style.display = "none";
    icoln.style.display = "none";
    icogm.style.display = "none";
  }
};

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
