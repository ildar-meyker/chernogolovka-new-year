import Bird from "./Bird";

const Welcome = {
	_handleStartButton(e) {
		e.preventDefault();

		this.hideText();

		Bird.flyToBasket();

		setTimeout(() => {
			Bird.flyToBox();
		}, 4000);

		setTimeout(() => {
			Bird.sitDown();
		}, 8000);
	},

	hideText() {
		$("#welcome__image__in1").addClass("scaled");
		$("#welcome__text").addClass("hidden");
	},

	showText() {
		$("#welcome__image__in1").removeClass("scaled");
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
