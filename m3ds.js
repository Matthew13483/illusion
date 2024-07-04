const colors = [
	"#fcfcfc", //white
	"#dc6000", //orange
	"#008500", //green
	"#b00000", //red
	"#0a0ab0", //blue
	"#fcfc00", //yellow
	"#101010" //internals
];
var shading = {
	surface: 0.1,
	internals: 0.1
};
var M = [0, 0.6];
const m3ds = {
	edge: [
		{
			color: 1,
			points: [
				[-(1.00 - M[0]), +(1.00 - M[0]), -(1 + M[0])],
				[+(1.00 - M[0]), +(1.00 - M[0]), -(1 + M[0])],
				[+(1.00 - M[0]), -(0.63 - M[0]), -(1 + M[0])],
				[+(0.88 - M[0]), -(0.80 - M[0]), -(1 + M[0])],
				[+(0.68 - M[0]), -(0.93 - M[0]), -(1 + M[0])],
				[+(0.40 - M[0]), -(1.00 - M[0]), -(1 + M[0])],
				[-(0.40 - M[0]), -(1.00 - M[0]), -(1 + M[0])],
				[-(0.68 - M[0]), -(0.93 - M[0]), -(1 + M[0])],
				[-(0.88 - M[0]), -(0.80 - M[0]), -(1 + M[0])],
				[-(1.00 - M[0]), -(0.63 - M[0]), -(1 + M[0])]
			]
		},
		{
			color: 2,
			points: [
				[-(1.00 - M[0]), +(1 + M[0]), -(1.00 - M[0])],
				[-(1.00 - M[0]), +(1 + M[0]), +(0.63 - M[0])],
				[-(0.88 - M[0]), +(1 + M[0]), +(0.80 - M[0])],
				[-(0.68 - M[0]), +(1 + M[0]), +(0.93 - M[0])],
				[-(0.40 - M[0]), +(1 + M[0]), +(1.00 - M[0])],
				[+(0.40 - M[0]), +(1 + M[0]), +(1.00 - M[0])],
				[+(0.68 - M[0]), +(1 + M[0]), +(0.93 - M[0])],
				[+(0.88 - M[0]), +(1 + M[0]), +(0.80 - M[0])],
				[+(1.00 - M[0]), +(1 + M[0]), +(0.63 - M[0])],
				[+(1.00 - M[0]), +(1 + M[0]), -(1.00 - M[0])]
			]
		},
		/*{ color: 1, points: [[-1.00, +1.00, -1], [+1.00, +1.00, -1], [+(1.00 - M[0]), +(1.00 - M[0]), -(1 + M[0])], [-(1.00 - M[0]), +(1.00 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+1.00, +1.00, -1], [+1.00, -0.63, -1], [+(1.00 - M[0]), -(0.63 - M[0]), -(1 + M[0])], [+(1.00 - M[0]), +(1.00 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+1.00, -0.63, -1], [+0.88, -0.80, -1], [+(0.88 - M[0]), -(0.80 - M[0]), -(1 + M[0])], [+(1.00 - M[0]), -(0.63 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+0.88, -0.80, -1], [+0.68, -0.93, -1], [+(0.68 - M[0]), -(0.93 - M[0]), -(1 + M[0])], [+(0.88 - M[0]), -(0.80 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+0.68, -0.93, -1], [+0.40, -1.00, -1], [+(0.40 - M[0]), -(1.00 - M[0]), -(1 + M[0])], [+(0.68 - M[0]), -(0.93 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+0.40, -1.00, -1], [-0.40, -1.00, -1], [-(0.40 - M[0]), -(1.00 - M[0]), -(1 + M[0])], [+(0.40 - M[0]), -(1.00 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[-0.40, -1.00, -1], [-0.68, -0.93, -1], [-(0.68 - M[0]), -(0.93 - M[0]), -(1 + M[0])], [-(0.40 - M[0]), -(1.00 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[-0.68, -0.93, -1], [-0.88, -0.80, -1], [-(0.88 - M[0]), -(0.80 - M[0]), -(1 + M[0])], [-(0.68 - M[0]), -(0.93 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[-0.88, -0.80, -1], [-1.00, -0.63, -1], [-(1.00 - M[0]), -(0.63 - M[0]), -(1 + M[0])], [-(0.88 - M[0]), -(0.80 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[-1.00, -0.63, -1], [-1.00, +1.00, -1], [-(1.00 - M[0]), +(1.00 - M[0]), -(1 + M[0])], [-(1.00 - M[0]), -(0.63 - M[0]), -(1 + M[0])]] },

		{ color: 2, points: [[-1.00, +1, -1.00], [-1.00, +1, +0.63], [-(1.00 - M[0]), +(1 + M[0]), +(0.63 - M[0])], [-(1.00 - M[0]), +(1 + M[0]), -(1.00 - M[0])]] },
		{ color: 2, points: [[-1.00, +1, +0.63], [-0.88, +1, +0.80], [-(0.88 - M[0]), +(1 + M[0]), +(0.80 - M[0])], [-(1.00 - M[0]), +(1 + M[0]), +(0.63 - M[0])]] },
		{ color: 2, points: [[-0.88, +1, +0.80], [-0.68, +1, +0.93], [-(0.68 - M[0]), +(1 + M[0]), +(0.93 - M[0])], [-(0.88 - M[0]), +(1 + M[0]), +(0.80 - M[0])]] },
		{ color: 2, points: [[-0.68, +1, +0.93], [-0.40, +1, +1.00], [-(0.40 - M[0]), +(1 + M[0]), +(1.00 - M[0])], [-(0.68 - M[0]), +(1 + M[0]), +(0.93 - M[0])]] },
		{ color: 2, points: [[-0.40, +1, +1.00], [+0.40, +1, +1.00], [+(0.40 - M[0]), +(1 + M[0]), +(1.00 - M[0])], [-(0.40 - M[0]), +(1 + M[0]), +(1.00 - M[0])]] },
		{ color: 2, points: [[+0.40, +1, +1.00], [+0.68, +1, +0.93], [+(0.68 - M[0]), +(1 + M[0]), +(0.93 - M[0])], [+(0.40 - M[0]), +(1 + M[0]), +(1.00 - M[0])]] },
		{ color: 2, points: [[+0.68, +1, +0.93], [+0.88, +1, +0.80], [+(0.88 - M[0]), +(1 + M[0]), +(0.80 - M[0])], [+(0.68 - M[0]), +(1 + M[0]), +(0.93 - M[0])]] },
		{ color: 2, points: [[+0.88, +1, +0.80], [+1.00, +1, +0.63], [+(1.00 - M[0]), +(1 + M[0]), +(0.63 - M[0])], [+(0.88 - M[0]), +(1 + M[0]), +(0.80 - M[0])]] },
		{ color: 2, points: [[+1.00, +1, +0.63], [+1.00, +1, -1.00], [+(1.00 - M[0]), +(1 + M[0]), -(1.00 - M[0])], [+(1.00 - M[0]), +(1 + M[0]), +(0.63 - M[0])]] },
		{ color: 2, points: [[+1.00, +1, -1.00], [-1.00, +1, -1.00], [-(1.00 - M[0]), +(1 + M[0]), -(1.00 - M[0])], [+(1.00 - M[0]), +(1 + M[0]), -(1.00 - M[0])]] },
*/
		{ color: 0, points: [[+1.00, +1.00, -1.00], [+1.00, +1.00, +0.63], [+1.00, -0.63, +0.63], [+1.00, -0.63, -1.00]] },
		{ color: 0, points: [[+1.00, +1.00, +0.63], [+0.88, +1.00, +0.80], [+0.88, -0.80, +0.80], [+1.00, -0.63, +0.63]] },
		{ color: 0, points: [[+1.00, -0.63, -1.00], [+1.00, -0.63, +0.63], [+0.88, -0.80, +0.80], [+0.88, -0.80, -1.00]] },
		{ color: 0, points: [[+0.88, +1.00, +0.80], [+0.68, +1.00, +0.93], [+0.68, -0.93, +0.93], [+0.88, -0.80, +0.80]] },
		{ color: 0, points: [[+0.88, -0.80, -1.00], [+0.88, -0.80, +0.80], [+0.68, -0.93, +0.93], [+0.68, -0.93, -1.00]] },
		{ color: 0, points: [[+0.68, +1.00, +0.93], [+0.40, +1.00, +1.00], [+0.40, -1.00, +1.00], [+0.68, -0.93, +0.93]] },
		{ color: 0, points: [[+0.68, -0.93, -1.00], [+0.68, -0.93, +0.93], [+0.40, -1.00, +1.00], [+0.40, -1.00, -1.00]] },

		{ color: 0, points: [[-1.00, +1.00, +0.63], [-1.00, +1.00, -1.00], [-1.00, -0.63, -1.00], [-1.00, -0.63, +0.63]] },
		{ color: 0, points: [[-0.88, +1.00, +0.80], [-1.00, +1.00, +0.63], [-1.00, -0.63, +0.63], [-0.88, -0.80, +0.80]] },
		{ color: 0, points: [[-1.00, -0.63, +0.63], [-1.00, -0.63, -1.00], [-0.88, -0.80, -1.00], [-0.88, -0.80, +0.80]] },
		{ color: 0, points: [[-0.68, +1.00, +0.93], [-0.88, +1.00, +0.80], [-0.88, -0.80, +0.80], [-0.68, -0.93, +0.93]] },
		{ color: 0, points: [[-0.88, -0.80, +0.80], [-0.88, -0.80, -1.00], [-0.68, -0.93, -1.00], [-0.68, -0.93, +0.93]] },
		{ color: 0, points: [[-0.40, +1.00, +1.00], [-0.68, +1.00, +0.93], [-0.68, -0.93, +0.93], [-0.40, -1.00, +1.00]] },
		{ color: 0, points: [[-0.68, -0.93, +0.93], [-0.68, -0.93, -1.00], [-0.40, -1.00, -1.00], [-0.40, -1.00, +1.00]] },

		{ color: 0, points: [[-0.40, -1.00, -1.00], [+0.40, -1.00, -1.00], [+0.40, -1.00, +1.00], [-0.40, -1.00, +1.00]] },
		{ color: 0, points: [[+0.40, +1.00, +1.00], [-0.40, +1.00, +1.00], [-0.40, -1.00, +1.00], [+0.40, -1.00, +1.00]] },

	],
	center: [
		{
			color: 1,
			points: [[-(1 - M[1]), +(1 + M[0]), +(1 - M[0])], [+(1 - M[1]), +(1 + M[0]), +(1 - M[0])], [+((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.9239 * M[1])], [+((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.7071 * M[1])], [+((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.3827 * M[1])],
						 [+(1 - M[0]), +(1 + M[0]), +(1 - M[1])], [+(1 - M[0]), +(1 + M[0]), -(1 - M[1])], [+((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.3827 * M[1])], [+((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.7071 * M[1])], [+((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.9239 * M[1])],
						 [+(1 - M[1]), +(1 + M[0]), -(1 - M[0])], [-(1 - M[1]), +(1 + M[0]), -(1 - M[0])], [-((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.9239 * M[1])], [-((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.7071 * M[1])], [-((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.3827 * M[1])],
						 [-(1 - M[0]), +(1 + M[0]), -(1 - M[1])], [-(1 - M[0]), +(1 + M[0]), +(1 - M[1])], [-((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.3827 * M[1])], [-((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.7071 * M[1])], [-((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.9239 * M[1])]]
		},
		/*{ color: 1, points: [[-(1 - M[1]), +1, +1], [+(1 - M[1]), +1, +1], [+(1 - M[1]), +(1 + M[0]), +(1 - M[0])], [-(1 - M[1]), +(1 + M[0]), +(1 - M[0])]] },
		{ color: 1, points: [[+1, +1, +(1 - M[1])], [+1, +1, -(1 - M[1])], [+(1 - M[0]), +(1 + M[0]), -(1 - M[1])], [+(1 - M[0]), +(1 + M[0]), +(1 - M[1])]] },
		{ color: 1, points: [[+(1 - M[1]), +1, -1], [-(1 - M[1]), +1, -1], [-(1 - M[1]), +(1 + M[0]), -(1 - M[0])], [+(1 - M[1]), +(1 + M[0]), -(1 - M[0])]] },
		{ color: 1, points: [[-1, +1, -(1 - M[1])], [-1, +1, +(1 - M[1])], [-(1 - M[0]), +(1 + M[0]), +(1 - M[1])], [-(1 - M[0]), +(1 + M[0]), -(1 - M[1])]] },

		{ color: 1, points: [[+(1 - M[1]), +1, +1], [+((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.9239 * M[1])], [+(1 - M[1]), +(1 + M[0]), +(1 - M[0])]] },
		{ color: 1, points: [[-((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])], [-(1 - M[1]), +1, +1], [-(1 - M[1]), +(1 + M[0]), +(1 - M[0])], [-((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.9239 * M[1])]] },
		{ color: 1, points: [[+1, +1, -(1 - M[1])], [+((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.3827 * M[1])], [+(1 - M[0]), +(1 + M[0]), -(1 - M[1])]] },
		{ color: 1, points: [[+((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])], [+1, +1, +(1 - M[1])], [+(1 - M[0]), +(1 + M[0]), +(1 - M[1])], [+((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.3827 * M[1])]] },
		{ color: 1, points: [[-(1 - M[1]), +1, -1], [-((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.9239 * M[1])], [-(1 - M[1]), +(1 + M[0]), -(1 - M[0])]] },
		{ color: 1, points: [[+((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])], [+(1 - M[1]), +1, -1], [+(1 - M[1]), +(1 + M[0]), -(1 - M[0])], [+((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.9239 * M[1])]] },
		{ color: 1, points: [[-1, +1, +(1 - M[1])], [-((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.3827 * M[1])], [-(1 - M[0]), +(1 + M[0]), +(1 - M[1])]] },
		{ color: 1, points: [[-((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])], [-1, +1, -(1 - M[1])], [-(1 - M[0]), +(1 + M[0]), -(1 - M[1])], [-((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.3827 * M[1])]] },

		{ color: 1, points: [[-((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.9239 * M[1])], [-((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.7071 * M[1])]] },
		{ color: 1, points: [[+((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.7071 * M[1])], [+((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.9239 * M[1])]] },
		{ color: 1, points: [[+((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.9239 * M[1])], [+((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.7071 * M[1])]] },
		{ color: 1, points: [[-((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.7071 * M[1])], [-((1 - M[1] - M[0]) + 0.3827 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.9239 * M[1])]] },
		{ color: 1, points: [[-((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.7071 * M[1])], [-((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.3827 * M[1])]] },
		{ color: 1, points: [[+((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.3827 * M[1])], [+((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), +((1 - M[1] - M[0]) + 0.7071 * M[1])]] },
		{ color: 1, points: [[+((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.7071 * M[1])], [+((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.3827 * M[1])]] },
		{ color: 1, points: [[-((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1] - M[0]) + 0.9239 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.3827 * M[1])], [-((1 - M[1] - M[0]) + 0.7071 * M[1]), +(1 + M[0]), -((1 - M[1] - M[0]) + 0.7071 * M[1])]] },
*/
		{ color: 0, points: [[-(1 - M[1]), +1, +1], [-(1 - M[1]), -1, +1], [+(1 - M[1]), -1, +1], [+(1 - M[1]), +1, +1]] },
		{ color: 0, points: [[+(1 - M[1]), +1, +1], [+(1 - M[1]), -1, +1], [+((1 - M[1]) + 0.3827 * M[1]), -1, +((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])]] },
		{ color: 0, points: [[+((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1]) + 0.3827 * M[1]), -1, +((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), -1, +((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])]] },
		{ color: 0, points: [[+((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), -1, +((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.9239 * M[1]), -1, +((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])]] },
		{ color: 0, points: [[+((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1]) + 0.9239 * M[1]), -1, +((1 - M[1]) + 0.3827 * M[1])], [+1, -1, +(1 - M[1])], [+1, +1, +(1 - M[1])]] },
		{ color: 0, points: [[+1, +1, +(1 - M[1])], [+1, -1, +(1 - M[1])], [+1, -1, -(1 - M[1])], [+1, +1, -(1 - M[1])]] },
		{ color: 0, points: [[+1, +1, -(1 - M[1])], [+1, -1, -(1 - M[1])], [+((1 - M[1]) + 0.9239 * M[1]), -1, -((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])]] },
		{ color: 0, points: [[+((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])], [+((1 - M[1]) + 0.9239 * M[1]), -1, -((1 - M[1]) + 0.3837 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), -1, -((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])]] },
		{ color: 0, points: [[+((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.7071 * M[1]), -1, -((1 - M[1]) + 0.7071 * M[1])], [+((1 - M[1]) + 0.3827 * M[1]), -1, -((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])]] },
		{ color: 0, points: [[+((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])], [+((1 - M[1]) + 0.3827 * M[1]), -1, -((1 - M[1]) + 0.9239 * M[1])], [+(1 - M[1]), -1, -1], [+(1 - M[1]), +1, -1]] },
		{ color: 0, points: [[+(1 - M[1]), +1, -1], [+(1 - M[1]), -1, -1], [-(1 - M[1]), -1, -1], [-(1 - M[1]), +1, -1]] },
		{ color: 0, points: [[-(1 - M[1]), +1, -1], [-(1 - M[1]), -1, -1], [-((1 - M[1]) + 0.3827 * M[1]), -1, -((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])]] },
		{ color: 0, points: [[-((1 - M[1]) + 0.3827 * M[1]), +1, -((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1]) + 0.3827 * M[1]), -1, -((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), -1, -((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])]] },
		{ color: 0, points: [[-((1 - M[1]) + 0.7071 * M[1]), +1, -((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), -1, -((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.9239 * M[1]), -1, -((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])]] },
		{ color: 0, points: [[-((1 - M[1]) + 0.9239 * M[1]), +1, -((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1]) + 0.9239 * M[1]), -1, -((1 - M[1]) + 0.3827 * M[1])], [-1, -1, -(1 - M[1])], [-1, +1, -(1 - M[1])]] },
		{ color: 0, points: [[-1, +1, -(1 - M[1])], [-1, -1, -(1 - M[1])], [-1, -1, +(1 - M[1])], [-1, +1, +(1 - M[1])]] },
		{ color: 0, points: [[-1, +1, +(1 - M[1])], [-1, -1, +(1 - M[1])], [-((1 - M[1]) + 0.9239 * M[1]), -1, +((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])]] },
		{ color: 0, points: [[-((1 - M[1]) + 0.9239 * M[1]), +1, +((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1]) + 0.9239 * M[1]), -1, +((1 - M[1]) + 0.3827 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), -1, +((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])]] },
		{ color: 0, points: [[-((1 - M[1]) + 0.7071 * M[1]), +1, +((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.7071 * M[1]), -1, +((1 - M[1]) + 0.7071 * M[1])], [-((1 - M[1]) + 0.3827 * M[1]), -1, +((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])]] },
		{ color: 0, points: [[-((1 - M[1]) + 0.3827 * M[1]), +1, +((1 - M[1]) + 0.9239 * M[1])], [-((1 - M[1]) + 0.3827 * M[1]), -1, +((1 - M[1]) + 0.9239 * M[1])], [-(1 - M[1]), -1, +1], [-(1 - M[1]), +1, +1]] },

	],
	corner: [
		{ color: 1, points: [[-(1 - M[0]), +(1 - M[0]), -(1 + M[0])], [+(1 - M[0]), +(1 - M[0]), -(1 + M[0])], [+(1 - M[0]), -(1 - M[0]), -(1 + M[0])], [-(1 - M[0]), -(1 - M[0]), -(1 + M[0])]] },
/*		{ color: 1, points: [[-1, +1, -1], [+1, +1, -1], [+(1 - M[0]), +(1 - M[0]), -(1 + M[0])], [-(1 - M[0]), +(1 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+1, +1, -1], [+1, -1, -1], [+(1 - M[0]), -(1 - M[0]), -(1 + M[0])], [+(1 - M[0]), +(1 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[+1, -1, -1], [-1, -1, -1], [-(1 - M[0]), -(1 - M[0]), -(1 + M[0])], [+(1 - M[0]), -(1 - M[0]), -(1 + M[0])]] },
		{ color: 1, points: [[-1, -1, -1], [-1, +1, -1], [-(1 - M[0]), +(1 - M[0]), -(1 + M[0])], [-(1 - M[0]), -(1 - M[0]), -(1 + M[0])]] },
*/
		{ color: 2, points: [[+(1 + M[0]), +(1 - M[0]), -(1 - M[0])], [+(1 + M[0]), +(1 - M[0]), +(1 - M[0])], [+(1 + M[0]), -(1 - M[0]), +(1 - M[0])], [+(1 + M[0]), -(1 - M[0]), -(1 - M[0])]] },
/*		{ color: 2, points: [[+1, +1, -1], [+1, +1, +1], [+(1 + M[0]), +(1 - M[0]), +(1 - M[0])], [+(1 + M[0]), +(1 - M[0]), -(1 - M[0])]] },
		{ color: 2, points: [[+1, +1, +1], [+1, -1, +1], [+(1 + M[0]), -(1 - M[0]), +(1 - M[0])], [+(1 + M[0]), +(1 - M[0]), +(1 - M[0])]] },
		{ color: 2, points: [[+1, -1, +1], [+1, -1, -1], [+(1 + M[0]), -(1 - M[0]), -(1 - M[0])], [+(1 + M[0]), -(1 - M[0]), +(1 - M[0])]] },
		{ color: 2, points: [[+1, -1, -1], [+1, +1, -1], [+(1 + M[0]), +(1 - M[0]), -(1 - M[0])], [+(1 + M[0]), -(1 - M[0]), -(1 - M[0])]] },
*/
		{ color: 3, points: [[-(1 - M[0]), +(1 + M[0]), +(1 - M[0])], [+(1 - M[0]), +(1 + M[0]), +(1 - M[0])], [+(1 - M[0]), +(1 + M[0]), -(1 - M[0])], [-(1 - M[0]), +(1 + M[0]), -(1 - M[0])]] },
/*		{ color: 3, points: [[-1, +1, +1], [+1, +1, +1], [+(1 - M[0]), +(1 + M[0]), +(1 - M[0])], [-(1 - M[0]), +(1 + M[0]), +(1 - M[0])]] },
		{ color: 3, points: [[+1, +1, +1], [+1, +1, -1], [+(1 - M[0]), +(1 + M[0]), -(1 - M[0])], [+(1 - M[0]), +(1 + M[0]), +(1 - M[0])]] },
		{ color: 3, points: [[+1, +1, -1], [-1, +1, -1], [-(1 - M[0]), +(1 + M[0]), -(1 - M[0])], [+(1 - M[0]), +(1 + M[0]), -(1 - M[0])]] },
		{ color: 3, points: [[-1, +1, -1], [-1, +1, +1], [-(1 - M[0]), +(1 + M[0]), +(1 - M[0])], [-(1 - M[0]), +(1 + M[0]), -(1 - M[0])]] },
*/
		{ color: 0, points: [[-1, +1, +1], [-1, +1, -1], [-1, -1, -1], [-1, -1, +1]] },
		{ color: 0, points: [[-1, -1, -1], [+1, -1, -1], [+1, -1, +1], [-1, -1, +1]] },
		{ color: 0, points: [[+1, -1, +1], [+1, +1, +1], [-1, +1, +1], [-1, -1, +1]] },

	],
	core: [
		{ color: 0, points: [[-1, +1, +1], [+1, +1, +1], [+1, +1, -1], [-1, +1, -1]] },
		{ color: 0, points: [[-1, -1, -1], [+1, -1, -1], [+1, -1, +1], [-1, -1, +1]] },
		{ color: 0, points: [[-1, +1, -1], [+1, +1, -1], [+1, -1, -1], [-1, -1, -1]] },
		{ color: 0, points: [[+1, +1, +1], [-1, +1, +1], [-1, -1, +1], [+1, -1, +1]] },
		{ color: 0, points: [[-1, +1, +1], [-1, +1, -1], [-1, -1, -1], [-1, -1, +1]] },
		{ color: 0, points: [[+1, +1, -1], [+1, +1, +1], [+1, -1, +1], [+1, -1, -1]] }
	]
};