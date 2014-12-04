(function() {
	var selectedItem = "placeholder";

	window.onload = function() {
		// set up menu buttons
		var menuItems = document.querySelectorAll("#menuitems li");
		for (var i = 0; i < menuItems.length; i++) {
			var item = menuItems[i];
			item.onmouseover = showSubMenu;
		}
		
		// hide all submenus
		var submenuItems = document.querySelectorAll("#submenu > ul");
		for (var i = 0; i < submenuItems.length; i++) {
			if (submenuItems[i].className !== selectedItem) {
				submenuItems[i].style.display = "none";
			}
		}
	};
	
	function showSubMenu() {
		var newSubmenu = document.querySelector("#submenu ." + this.classList[0]);
		if (newSubmenu) {
<<<<<<< HEAD
			document.querySelector("#menu ." + selectedItem).classList.remove("selected");
=======
>>>>>>> map
			var oldMenu = document.querySelector("#menu ." + selectedItem);
			if (oldMenu) {
				oldMenu.classList.remove("selected");
			}
<<<<<<< HEAD

=======
>>>>>>> map
			document.querySelector("#submenu ." + selectedItem).style.display = "none";
			this.classList.add("selected");
			newSubmenu.style.display = "";
			selectedItem = this.classList[0];
<<<<<<< HEAD
		}else{
			document.querySelector("#submenu ." + selectedItem).style.display = "none";
=======
>>>>>>> map
		}
	}
})();
