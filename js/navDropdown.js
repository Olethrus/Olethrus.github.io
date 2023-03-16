function showDropdown() 
{
  var dropdown = document.getElementById("navDropdown");
  dropdown.style.display = "block";
}
function hideDropdown() 
{
  var dropdown = document.getElementById("navDropdown");
  dropdown.style.display = "none";
}

window.onclick = function(event) 
{
  if (!event.target.matches('#navDropdown') && !event.target.matches('#showDropdown')) 
  {
    hideDropdown();
  }
}

