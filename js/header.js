function setHeaderShownVar() {
	document.documentElement.style.setProperty('--js-screen-width', window.innerWidth);
	document.documentElement.style.setProperty('--js-screen-height', window.innerHeight);
	document
		.documentElement
		.style
		.setProperty(
			'--js-header-shown',
			window.innerWidth > 991 ?
				"flex" :
				"none"
		);
	let navdividers = document.getElementsByClassName("nav-divider")
	for (let i = 0; i < navdividers.length; i++) {
		let children = navdividers[i].getElementsByTagName("a")
		for (let i = 0; i < children.length; i++) {
			children.animation = window.innerWidth > 991 ?
				"slide-in-left 0.6s cubic-bezier(.25,.46,.45,.94)" :
				"none";
		};
	};
};
setHeaderShownVar();
window.addEventListener("resize", () => {
	setHeaderShownVar();
});
