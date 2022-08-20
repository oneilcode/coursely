let acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}


let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}