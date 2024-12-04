function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId + '-dropdown');
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  
  // Close all other dropdowns first
  allDropdowns.forEach(function(d) {
    if (d.id !== dropdownId + '-dropdown') {
      d.classList.remove('show');
    }
  });
  
  // Toggle the clicked dropdown
  dropdown.classList.toggle('show');
}

// Close dropdowns when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-icon')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let dropdown of dropdowns) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}
