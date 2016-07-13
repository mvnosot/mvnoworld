var mongoose =require('mongoose');
var Schema = mongoose.Schema;

/*
    User Schema 
    로그인 시 인증 절차를 위한 모델
    
    "name": "이종원",
    "mvno_cd": "M00030",
    "mvno_nm": "SK텔링크",
    "phone_number": "01062846257",
    "birthday": "820805",
*/
var numberSchema = new Schema({
    name: String,
    mvno_cd : String,
    mvno_nm : String,
    phone_number : String,
    birthday : String
})

// module model
module.exports = mongoose.model('number', numberSchema);