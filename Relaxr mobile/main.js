function enableDropdownMenu() {
  document
    .querySelector(".dropdown-menu-toggle")
    .addEventListener("click", () => {
      const dropdownMenu = document.querySelector(".dropdown-menu");
      if (dropdownMenu.classList.contains("h-0")) {
        dropdownMenu.classList.remove("h-0");
      } else {
        dropdownMenu.classList.add("h-0");
      }
    });
}

document.addEventListener("DOMContentLoaded", function() {
  enableDropdownMenu();
});
