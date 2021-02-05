getComputedStyle(element).getPropertyValue('--color-font-general');
function setHeaderShownVar() {
	document
		.documentElement
		.style
		.setProperty(
			'--js-header-shown',
			window.innerWidth > 991 ?
				true :
				false
		);
}
window.addEventListener("resize", () => {
	setHeaderShownVar()
});
