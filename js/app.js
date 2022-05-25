/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
document.addEventListener("DOMContentLoaded", NavBar, false);
document.addEventListener("DOMContentLoaded", ActiveSection, false);
document.addEventListener("DOMContentLoaded", SmallMenu, false);


// Dynamically build the navigation menu
let sections = document.querySelectorAll("section");
let h2s = document.querySelectorAll("section h2");

function NavBar() {
	for (let i = 0; i < sections.length; i++) {
		const li = document.createElement("li");
		const tag = document.createElement("a");
		const sectionName = sections[i].getAttribute("data-nav");
		tag.setAttribute("id", "linkNumber" + [i + 1]);
		tag.innerText = sectionName;
		li.appendChild(tag);
		document.getElementById("navbar__list").appendChild(li);
		document.getElementById("linkNumber" + [i + 1]).addEventListener("click", function (e) { Scrolling(i + 1, e) })
		
	};
}

// Make the current section active  (at the top of viewport) 
function ActiveSection() {
	window.addEventListener("scroll", function () {
		const element = document.getElementsByClassName("landing__container");
		for (let i = 0; i < element.length; i++) {
			const position = element[i].getBoundingClientRect().top;
			// const posit = position.top;
			if (position <= window.innerHeight / 2) {
				let current = document.getElementsByClassName("active");
				if (current.length > 0) { current[0].classList.remove("active"); }
				let links = document.getElementById("navbar__list").querySelectorAll("li");
				links[i].className += " active";
				sections.forEach((sec, index) => {
					sec.classList.remove("your-active-class")
					h2s[index].style.color = "white";
				})
				sections[i].classList.add("your-active-class");
				h2s[i].style.color = "yellow";
			}
		};

	});
}

// ScrollTo event 
function Scrolling(sectionI, e) {
	e.preventDefault();  // added perventDefault
	const section = document.getElementById("section" + sectionI);
	const pos = section.offsetTop;
	window.scrollTo({ top: pos, behavior: "smooth" });
	SmallMenu();
}



// Create toggle menu for responsive mode
function SmallMenu() {
	const x = document.getElementById("navbar__list");
	if (x.className === "navbar__menu") {
		x.className += " responsive";
	} else {
		x.className = "navbar__menu";
	}
}


