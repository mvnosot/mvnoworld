var mongoose =require('mongoose');
var Schema = mongoose.Schema;

/*
    "name": "이종원",
    "mvno_cd": "M00030",
    "mvno_nm": "SK텔링크",
    "phone_number": "01062846257",
    "birthday": "820805",
*/
var userSchema = new Schema({
    name: String,
    mvno_cd : String,
    mvno_nm : String,
    phone_number : String,
    birthday : String
})

// module model
module.exports = mongoose.model('user', userSchema);