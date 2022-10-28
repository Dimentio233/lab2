function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener('click', responsive_control);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_control() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}