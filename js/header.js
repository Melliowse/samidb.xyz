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
setHeaderShownVar();
window.addEventListener("resize", () => {
	setHeaderShownVar();
});
