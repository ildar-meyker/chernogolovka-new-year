import Bird from "./Bird";

const Welcome = {
	_handleStartButton(e) {
		e.preventDefault();

		this._hideText();

		Bird.flyToBasket();

		setTimeout(() => {
			Bird.flyToBox();
		}, 4000);

		setTimeout(() => {
			Bird.sitDown();
			this._switchToStep2();
		}, 8000);
	},

	_handleRedWaveOver(e) {
		$("#red-wave").addClass("hover");
	},

	_handleRedWaveOut(e) {
		$("#red-wave").removeClass("hover");
	},

	_handleRedWaveClick(e) {
		e.preventDefault();

		if ($(e.target).closest(".red-wave__back").length > 0) return;

		this._switchToStep3();
	},

	_handleBackButton(e) {
		e.preventDefault();

		this._resetAnimation();
	},

	_hideText() {
		$("#welcome__image__in1").addClass("scaled");
		$("#welcome__text").addClass("hidden");
	},

	_showText() {
		$("#welcome__image__in1").removeClass("scaled");
		$("#welcome__text").removeClass("hidden");
	},

	_switchToStep2() {
		$("#lemon, #red-wave").addClass("visible");
		$("#welcome__section, #bird__image").addClass("hidden");
	},

	_switchToStep3() {
		$("#lemon").removeClass("visible");
		$("#red-wave").addClass("active");
	},

	_resetAnimation() {
		$("#red-wave").removeClass("visible active hover");
		$("#welcome__section, #bird__image").removeClass("hidden");
		this._showText();
		Bird.reset();
	},

	init() {
		$(document).on(
			"click",
			".welcome__button",
			this._handleStartButton.bind(this)
		);

		$(document).on(
			"mouseenter",
			".red-wave__center",
			this._handleRedWaveOver.bind(this)
		);

		$(document).on(
			"mouseleave",
			".red-wave__center",
			this._handleRedWaveOut.bind(this)
		);

		$(document).on(
			"click",
			".red-wave__center",
			this._handleRedWaveClick.bind(this)
		);

		$(document).on(
			"click",
			".red-wave__back",
			this._handleBackButton.bind(this)
		);
	},
};

$(function () {
	Welcome.init();
});

export default Welcome;
