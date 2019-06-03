let el = document.getElementById("hide_this")

function hideWhenClicked() {
  document.getElementById("hide_this").onclick = function() {
    document.getElementById("hide_this").style.display = "none";
  }
}
