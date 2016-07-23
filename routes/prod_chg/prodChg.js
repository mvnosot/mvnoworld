
module.exports = function(app, CustModel, ProdModel) {

    //요금제 조회
    app.get('/prod_chg', function(req, res) {
        var custInfo = null;
        CustModel.findOne({svc_num:req.session.svc_num},function(err,cust){
         //console.log("cust :",cust);
          if(!err) custInfo = cust;
        });
        ProdModel.find({},function(err,prods){
          if(err) return res.json({success:false,message:err});
          //console.log("custInfo List2:",custInfo);
          res.render('prod_chg/prodChgView', {data:prods, data2:custInfo, user_session:req.session});
        });
         
    });
    // 요금제 상세조회
    app.get('/prod_chg/:id', function(req,res){
        //console.log("prod_id:",req.params.id);
        var custInfo = null;
        CustModel.findOne({svc_num:req.session.svc_num},function(err,cust){
         //console.log("cust :",cust);
          if(!err) custInfo = cust;
        });
        ProdModel.findById(req.params.id, function(err,prod){
        console.log("Prod_info:",prod);
        if(err) return res.json({success:false,message:err});
        res.render("prod_chg/prodChgAction",{data:prod, data2:custInfo, user_session:req.session});
        });
    }); 
    //요금제 변경
     app.post('/prod_chg', function(req, res) {
        console.log("요금제 변경시작!!");
        console.log("post req.body.cust:",req.body.cust);

        CustModel.findByIdAndUpdate(req.body.cust._id, req.body.cust, function(err,cust){
            if(err)return console.log("Update ERROR:",err);
            console.log("post result:",cust);
            res.redirect('/prod_chg');
        });
    });
    
}