const Bird = {
	calcPath(p1x, p1y, p2x, p2y, offset) {
		// mid-point of line:
		var mpx = (p2x + p1x) * 0.5;
		var mpy = (p2y + p1y) * 0.5;

		// angle of perpendicular to line:
		var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

		// distance of control point from mid-point of line:
		var offset = offset || 200;

		// location of control point:
		var c1x = mpx + offset * Math.cos(theta);
		var c1y = mpy + offset * Math.sin(theta);

		// construct the command to draw a quadratic curve
		return (
			"M" +
			p1x +
			" " +
			p1y +
			" Q " +
			c1x +
			" " +
			c1y +
			" " +
			p2x +
			" " +
			p2y
		);
	},

	drawControlPoints(points) {
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

	getPointsToBox() {
		const $img = $("#welcome__image");

		const p1X = -200;
		const p1Y = $(window).height() * 0.75;

		const p3X = $img.offset().left + 0.7561 * $img.width();
		const p3Y = $img.offset().top + 0.207 * $img.height();

		const p2X = p3X * 0.5;
		const p2Y = p1Y * 0.5;

		const points = [
			{ x: p1X, y: p1Y },
			{ x: p2X, y: p2Y },
			{ x: p3X, y: p3Y },
		];

		return points;
	},

	flyAway() {
		console.log("flyAway");
	},

	flyToPresentBox() {
		const points = this.getPointsToBox();

		console.log(points);

		gsap.set("#bird__image", {
			xPercent: -50,
			yPercent: -75,
			x: points[0].x,
			y: points[0].y,
		});

		gsap.to("#bird__image", {
			motionPath: {
				path: points,
			},
			duration: 5,
			ease: "power1.inOut",
		});
	},

	setFastSpeed() {
		$("#bird__image").addClass("speed-fast");
	},

	setUsualSpeed() {
		$("#bird__image").removeClass("speed-fast");
	},
};

window.Bird = Bird;

export default Bird;
