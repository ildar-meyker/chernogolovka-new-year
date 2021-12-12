const Loader = {
	hideLoader() {
		$("#loader__progress__level").css({
			width: "100%",
		});

		setTimeout(() => {
			$("#loader").removeClass("active");
		}, 300);
	},

	_handleWindowLoad() {
		this.hideLoader();
	},

	init() {
		window.onload = this._handleWindowLoad.bind(this);
	},
};

Loader.init();

export default Loader;
