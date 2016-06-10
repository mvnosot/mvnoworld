var mongoose =require('mongoose');
var Schema = mongoose.Schema;

/*
    mvno_cd: "M00035",
    mvno_nm: "SK텔링크",
    prod_cl: "청소년",
    prod_cd : "P035011",
    prod_nm : "Band데이터59",
    prod_data : "11GB",
    prod_vo : "100분",
    prod_sms : "기본제공",
    prod_fee : "29900",
    prod_dtc : "비고"
*/
var prodSchema = new Schema({
    mvno_cd: String,
    mvno_nm: String,
    prod_cl: String,
    prod_cd : String,
    prod_nm : String,
    prod_data : String,
    prod_vo : String,
    prod_sms : String,
    prod_fee : String,
    prod_dtc : String
})

// module model
module.exports = mongoose.model('prod', prodSchema);