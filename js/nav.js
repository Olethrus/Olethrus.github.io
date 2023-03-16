function showDropdown() 
{
  var dropdown = document.getElementById("navDropdown");
  dropdown.style.display = "block";
}
function hideDropdown() 
{
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = "none";
}

window.onclick = function(event) 
{
  if (!event.target.matches('#myDropdown') && !event.target.matches('#showDropdownButton')) 
  {
    hideDropdown();
  }
}

