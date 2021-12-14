const Bird = {
	_state: {
		position: "initial",
	},

	_drawPoints(points) {
		points.forEach((item) => {
			$("<div></div>")
				.css({
					position: "absolute",
					zIndex: "100",
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
			y: $(window).height() * 0.5,
		};
	},

	_getBasketPoint() {
		const $img = $("#welcome__image");

		return {
			x: $img.offset().left + 0.5 * $img.width(),
			y:
				$img.offset().top +
				0.6 * $img.height() * 1.3 +
				$img.height() * 0.1,
		};
	},

	_getBoxPoint() {
		const $img = $("#welcome__image");

		return {
			x:
				$img.offset().left +
				0.5 * $img.width() +
				0.259649 * $img.width() * 1.3,
			y:
				$img.offset().top +
				0.213028 * $img.height() * 1.3 +
				$img.height() * 1.3 * 0.1,
		};
	},

	_setToPoint(point) {
		gsap.set("#bird__image", {
			xPercent: -65,
			yPercent: -65,
			x: point.x,
			y: point.y,
		});
	},

	_getRandomFruit() {
		const fruits = $("#bird__fruits").children().toArray();
		$(_.shuffle(fruits)[0]).addClass("active");
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

		this._setToPoint(p1);

		$("#bird__image__in1")
			.removeClass("static flying-to-box")
			.addClass("flying-to-basket");

		gsap.to("#bird__image", {
			motionPath: {
				path: [p1, p2],
			},
			duration: 5,
			ease: "power1.out",
		});

		this._state.position = "basket";
	},

	flyToBox() {
		const p1 = this._getBasketPoint();
		const p2 = this._getBoxPoint();
		const p3 = { x: p1.x + 70, y: p2.y - 70 };

		this._getRandomFruit();

		$("#bird__image__in1")
			.removeClass("static flying-to-basket")
			.addClass("flying-to-box");

		gsap.to("#bird__image", {
			motionPath: {
				path: [p1, p3, p2],
			},
			duration: 4,
			ease: "power1.inOut",
		});

		this._state.position = "box";
	},

	sitDown() {
		$("#bird__image").addClass("hover");
		$("#bird__image__in1").addClass("static");
	},

	reset() {
		const p1 = this._getStartPoint();

		$("#bird__fruits").children().removeClass("active");
		$("#bird__image").removeClass("hover");
		this._setToPoint(p1);
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
