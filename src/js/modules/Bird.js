const Bird = {
	_state: {
		position: "initial",
	},

	_fly(points, duration) {
		gsap.to("#bird__image", {
			motionPath: {
				path: points,
			},
			duration: duration,
			ease: "power1.inOut",
		});
	},

	_drawPoints(points) {
		points.forEach((item) => {
			$("<div></div>")
				.css({
					position: "absolute",
					width: "10px",
					height: "10px",
					background: "#f00",
					left: item.x + "px",
					top: item.y + "px",
				})
				.appendTo($("body"));
		});
	},

	_getStartPoint() {
		return {
			x: -120,
			y: $(window).height() * 0.75,
		};
	},

	_getBasketPoint() {
		const $img = $("#welcome__image");

		return {
			x: $img.offset().left + 0.4 * 1.3 * $img.width(),
			y: $img.offset().top + 0.5 * 1.3 * $img.height(),
		};
	},

	_getBoxPoint() {
		const $img = $("#welcome__image");

		return {
			x: $img.offset().left + 0.7561 * 1.3 * $img.width(),
			y: $img.offset().top + 0.207 * 1.3 * $img.height(),
		};
	},

	_setToPoint(point) {
		gsap.set("#bird__image", {
			xPercent: -50,
			yPercent: -75,
			x: point.x,
			y: point.y,
		});
	},

	_setFastSpeed() {
		$("#bird__image").addClass("speed-fast");
	},

	_setUsualSpeed() {
		$("#bird__image").removeClass("speed-fast");
	},

	_handleWindowResize() {
		switch (this._state.position) {
			case "basket":
				this._setToPoint(this._getBasketPoint());
			case "box":
				this._setToPoint(this._getBoxPoint());
		}
	},

	flyToBasket() {
		const p1 = this._getStartPoint();
		const p2 = this._getBasketPoint();

		this._setFastSpeed();
		this._setToPoint(p1);
		this._fly([p1, p2], 5);
		this._state.position = "basket";
	},

	flyToBox() {
		const p1 = this._getBasketPoint();
		const p2 = this._getBoxPoint();
		const p3 = { x: p1.x + 100, y: p2.y - 100 };

		this._state.position = "box";
		this._fly([p1, p3, p2], 4);
		this._setUsualSpeed();
	},

	init() {
		$(window).on(
			"resize",
			$.throttle(250, this._handleWindowResize.bind(this))
		);
	},
};

window.Bird = Bird;

$(function () {
	Bird.init();
});

export default Bird;
