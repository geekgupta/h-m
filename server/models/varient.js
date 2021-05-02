var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
var varient = mongoose.Schema({
	VName: {
        type: String,
        required: true
    },
    VDescription: {
        type: String,
        required: true
    },
    VImage: {
        type: String,
    },
    VStatus: {
        type: String,
        required: true
    }
}, { timestamps: true })

const varient = mongoose.model("Varients", varient );
module.exports = varient;
