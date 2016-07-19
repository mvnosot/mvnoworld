
module.exports = function(app, CustModel, ProdModel) {


 app.get('/prod_chg', function(req, res) {
        var custInfo = null;
        CustModel.findOne({svc_num:"01029644930"},function(err,cust){
         //console.log("cust :",cust);
          if(!err) custInfo = cust;
        });
        ProdModel.find({},function(err,prods){
          if(err) return res.json({success:false,message:err});
          //console.log("custInfo List2:",custInfo);
          res.render('prod_chg/prodChgView', {data:prods, data2:custInfo});
        });
         
    });
    
    app.get('/prod_chg/:id', function(req,res){
        //console.log("prod_id:",req.params.id);
        var custInfo = null;
        CustModel.findOne({svc_num:"01029644930"},function(err,cust){
         //console.log("cust :",cust);
          if(!err) custInfo = cust;
        });
        ProdModel.findById(req.params.id, function(err,prod){
        console.log("Prod_info:",prod);
        if(err) return res.json({success:false,message:err});
        res.render("prod_chg/prodChgAction",{data:prod, data2:custInfo});
        });
    }); 
    
}