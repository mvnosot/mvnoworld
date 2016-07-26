var mongoose =require('mongoose');
var Schema = mongoose.Schema;

/*
    "svc_num": "01012341234",
    "mvno_co_cd": "M00030",
    "mvno_nm": "SK텔링크",
    "idnt_num_cd": "010",
    "exg_num": "1234",
    "line_num": "1234",
    "num_st_cd": "AV",
    "rsv_num": "01012341234",
    "rsv_num_cd": "06"
*/
var numrscSchema = new Schema({
    // svc_num : String,       //서비스번호
    // mvno_co_cd : String,    //사업자코드
    // mvno_nm : String,       //사업자명
    // idnt_num_cd : String,   //식별번호
    // exg_num : String,       //국번
    // line_num : String,      //라인번호
    // num_st_cd : String,     //번호상태코드
    // rsv_num : String,       //예약번호
    // rsv_num_cd : String,    //예약번호코드
    // create_dt : {type:Date, defualt:Date.now},
    // audit_dt : Date
    svc_num :{type:String, required:true},          //서비스번호
    mvno_co_cd : {type:String, required:true},      //사업자코드
    mvno_nm : {type:String, required:true},         //사업자명
    idnt_num_cd : {type:String, required:true},     //식별번호
    exg_num : {type:String, required:true},         //국번
    line_num : {type:String, required:true},        //라인번호
    num_st_cd : {type:String, required:true},       //번호상태코드
    rsv_num : {type:String},                        //예약번호
    rsv_num_cd : {type:String},                     //예약번호코드
    create_dt : {type:Date, default:Date.now},      //생성일시
    audit_dt : {type:Date},                         //변경일시
});

numrscSchema.methods.getCreatedDate = function () {
  var date = this.createdAt;
  return date.getFullYear() + "-" + get2digits(date.getMonth()+1)+ "-" + get2digits(date.getDate());
};

numrscSchema.methods.getCreatedTime = function () {
  var date = this.createdAt;
  return get2digits(date.getHours()) + ":" + get2digits(date.getMinutes())+ ":" + get2digits(date.getSeconds());
};
function get2digits(num){
  return ("0" + num).slice(-2);
}

// module model
module.exports = mongoose.model('numrsc', numrscSchema);
