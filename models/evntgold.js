var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var evntgoldSchema = new Schema({
    
    // evnt_cd : {type:String, required:true},             // 이벤트구분
    // req_dt : {type:String, required:true},              // 응모일자
    // svc_num :{type:String, required:true},              // 서비스번호
    // mvno_co_cd : {type:String, required:true},          // 사업자코드
    // mvno_nm : {type:String, required:true},             // 사업자명
    // cust_name : {type:String, required:true},           // 고객명
    // gold_svc_num :{type:String, required:true},         // 골드번호_서비스번호
    // gold_idnt_num_cd : {type:String, required:true},    // 골드번호_식별번호
    // gold_exg_num : {type:String, required:true},        // 골드번호_국번
    // gold_line_num : {type:String, required:true},       // 골드번호_라인번호
    // rsv_num_cd : {type:String},                         // 예약번호코드
    // create_dt : {type:Date, default:Date.now},          // 생성일시
    // audit_dt : {type:Date}                              // 변경일시
    evnt_cd : {type:String},             // 이벤트구분
    req_dt : {type:String},              // 응모일자
    svc_num :{type:String},              // 서비스번호
    mvno_co_cd : {type:String},          // 사업자코드
    mvno_nm : {type:String},             // 사업자명
    cust_name : {type:String},           // 고객명
    gold_svc_num :{type:String},         // 골드번호_서비스번호
    gold_idnt_num_cd : {type:String},    // 골드번호_식별번호
    gold_exg_num : {type:String},        // 골드번호_국번
    gold_line_num : {type:String},       // 골드번호_라인번호
    rsv_num_cd : {type:String},                         // 예약번호코드
    achv_cd : {type:String},                            // 취득유형코드
    create_dt : {type:Date, default:Date.now},          // 생성일시
    audit_dt : {type:Date}                              // 변경일시
});

evntgoldSchema.methods.getCreatedDate = function () {
  var date = this.createdAt;
  return date.getFullYear() + "-" + get2digits(date.getMonth()+1)+ "-" + get2digits(date.getDate());
};

evntgoldSchema.methods.getCreatedTime = function () {
  var date = this.createdAt;
  return get2digits(date.getHours()) + ":" + get2digits(date.getMinutes())+ ":" + get2digits(date.getSeconds());
};
function get2digits(num){
  return ("0" + num).slice(-2);
}

// module model
module.exports = mongoose.model('evntgold', evntgoldSchema);
