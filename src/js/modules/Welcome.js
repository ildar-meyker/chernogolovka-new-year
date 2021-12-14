import Bird from "./Bird";

const Welcome = {
	_handleStartButton(e) {
		e.preventDefault();

		this.hideText();

		setTimeout(() => {
			Bird.flyToBasket();
		}, 500);

		setTimeout(() => {
			Bird.flyToBox();
		}, 5500);
	},

	hideText() {
		$("#welcome__image").addClass("scaled");
		$("#welcome__text").addClass("hidden");
	},

	showText() {
		$("#welcome__image").removeClass("scaled");
		$("#welcome__text").removeClass("hidden");
	},

	init() {
		$(document).on(
			"click",
			".welcome__button",
			this._handleStartButton.bind(this)
		);
	},
};

$(function () {
	Welcome.init();
});

export default Welcome;
