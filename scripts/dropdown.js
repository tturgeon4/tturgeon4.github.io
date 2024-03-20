function dropdownFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    debugger;
    if (event.target.matches('.nav-item')) {
      debugger;
      var dropdowns = document.getElementsByClassName("dropdown-items");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        }
      }
    }
  }