const Bird = {
	flyAway() {
		console.log("flyAway");
	},

	flyToBasket() {
		console.log("flyToBasket");
	},

	setFastSpeed() {
		$("#bird__image").addClass("speed-fast");
	},

	setUsualSpeed() {
		$("#bird__image").removeClass("speed-fast");
	},
};

export default Bird;
