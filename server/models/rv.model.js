const mongoose = require("mongoose");

const RvSchema = new mongoose.Schema({
	manufacturer: {
		type: String,
		required: [true, "Manufacturer must be specified"],
		minlength: [6, "Valid manufacturer names have at least 6 characters."]
	},
	brand: {
		type: String
	},
	year: {
		type: Number,
		min: [1900, "All RVs were made in model years after 1900."],
		max: [2025, "We aren't in model years after 2025 yet!"]
	},
	model: { 
		type: String, 
		required: [true, "Model number is required."],
		minlength: [3, "Model number must be at least three characters."]
	}
}, {timestamps: true});

const Rv = mongoose.model("Rv", RvSchema);

module.exports = Rv;