function setHeaderShownVar() {
	document
		.documentElement
		.style
		.setProperty(
			'--js-header-shown',
			window.innerWidth > 991 ?
				"flex" :
				"none"
		);
}
window.addEventListener("resize", () => {
	setHeaderShownVar();
});

window.addEventListener("load", () => {
	setHeaderShownVar();
});
