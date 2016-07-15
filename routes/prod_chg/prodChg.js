
module.exports = function(app, ProdModel) {


    /* GET home page. */
    app.get('/prod_chg', function(req, res) {
        ProdModel.find({},function(err,prods){
             console.log("Data List:",prods);
            if(err)return console.log("Data ERROR:",err);
            res.render('prod_chg/prodChgView', {data:prods});
        })
    });
    
    app.get('/prod_chg/:id', function(req,res){
        console.log("prod_id:",req.params.id);
        ProdModel.findById(req.params.id, function(err,prod){
        console.log("Prod_info:",prod);
        if(err) return res.json({success:false,message:err});
        res.render("prod_chg/prodChgAction",{data:prod});
        });
    }); 
    
}