var mongoose =require('mongoose');
var Schema = mongoose.Schema;

/*
    "name": "이종원",
    "mvno_cd": "M00030",
    "mvno_nm": "SK텔링크",
    "phone_number": "01062846257",
    "birthday": "820805",
*/
var custSchema = new Schema({
    cust_name : String,     //고객명
    svc_num : String,       //서비스번호
    mvno_co_cd : String,    //사업자코드
    mvno_nm : String,       //사업자명
    last_scrb_type : String,//최종개통유형
    last_sctb_dt : String,  //최종개통일자
    eqp_mdl_cd : String,    //단말코드
    eqp_mdl_nm : String,    //단말모델명
    fee_prod_id : String,   //요금제코드
    fee_prod_nm : String,   //요금제명
    fee_prod_scrb_dt : String,   //요금제신청일자
    vas_list : [
            {
                vas_id : String,
                vas_nm : String,
                vas_scrb_dt : String,
                vas_amt : String
            },
            {
                vas_id : String,
                vas_nm : String,
                vas_scrb_dt : String,
                vas_amt : String                
            }
        ]
        ,
    audit_dt : String
})

// module model
module.exports = mongoose.model('cust', custSchema);