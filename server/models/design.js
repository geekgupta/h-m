var mongoose = require("mongoose");

var designSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	images: [String],
	code:String,
	color:String,
	materials: [{
		materialType: {
			type: mongoose.Types.ObjectId,
			ref: "Material"
		},
		weight: {
			type: Number
		},
	}, ],
	sizes: [{
		size: Number,
		weight: Number
	}],
	gold: {
		type: mongoose.Types.ObjectId,
		ref: "Material"
	},
	sex: String,
	description: String,
	type: String,
	width: Number,
	height: Number,
	discount: Number,
	makingCharges: Number
});

module.exports = mongoose.model("Design", designSchema);