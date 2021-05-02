const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const Subcatergories = new mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    cDescription: {
        type: String,
        required: true
    },
    cImage: {
        type: String,
    },
    cStatus: {
        type: String,
        required: true
    },
    cMaxprice : {
       type : Number , 
       required : true 
    },
    cMinprice : {
        type : Number , 
        required : true 
     }
 

}, { timestamps: true })

const SubcategoryModel = mongoose.model("Subcategories", Subcatergories);
module.exports = SubcategoryModel;