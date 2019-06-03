let el = document.getElementById("hide_this")

function hideWhenClicked(el) {
  el.addEventListener(click, function{
    this.style.display = "none";
  })
}
