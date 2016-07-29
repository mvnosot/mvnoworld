
module.exports = function(app, CustModel, ProdModel) {

    //요금제 조회
    app.get('/prod_chg', function(req, res) {
      if (!req.session.svc_num) {
          res.render('intro',{msg:'Termination Session! Try Login.'});
          return;
      }
      
        var custInfo = null;
        CustModel.findOne({svc_num:req.session.svc_num},function(err,cust){
          if(!err) custInfo = cust;
          
            ProdModel.find({},function(err,prods){
              if(err) return res.json({success:false,message:err});
              res.render('prod_chg/prodChgView', {data:prods, data2:custInfo, user_session:req.session});
            });
        });
    });
    
    // 요금제 상세조회
    app.get('/prod_chg/:id', function(req,res){
      if (!req.session.svc_num) {
          res.render('intro',{msg:'Termination Session! Try Login.'});
          return;
      }
      
        var custInfo = null;
        
        CustModel.findOne({svc_num:req.session.svc_num},function(err,cust){
          if(!err) custInfo = cust;
          
            ProdModel.findById(req.params.id, function(err,prod){
            if(err) return res.json({success:false,message:err});
            res.render("prod_chg/prodChgAction",{data:prod, data2:custInfo, user_session:req.session});
            });
        });
    }); 
    
    //요금제 변경
     app.post('/prod_chg', function(req, res) {
      if (!req.session.svc_num) {
          res.render('intro',{msg:'Termination Session! Try Login.'});
          return;
      }
      
        var custInfo = req.body.cust; 
        
        CustModel.findOneAndUpdate({svc_num:req.session.svc_num}, custInfo, function(err,cust){
            if(err)return console.log("Update ERROR:",err);
            res.redirect('/prod_chg');
        });
    });
    
}