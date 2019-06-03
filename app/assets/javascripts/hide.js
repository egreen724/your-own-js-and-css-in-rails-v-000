let el = document.getElementById("hide_this")

function hideWhenClicked(element) {
  // document.getElementById("hide_this").onclick = function() {
  //   document.getElementById("hide_this").style.display = "none";
  // }

  element.hide();
}

$('#hide_this').click(hideWhenClicked)
