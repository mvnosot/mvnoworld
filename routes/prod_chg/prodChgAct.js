
module.exports = function(app, ProdModel) {
    
    
/**
    // todo get
    app.get('/api/todo', function(req, res) {
       res.end(); 
    });    
    
    // todo :user_id get
    app.get('api/todo/:user_id', function(req, res) {
       res.end(); 
    });
    
    // todo :user_id update
    app.put('/api/todo/:user_id', function(req, res) {
       res.end(); 
    });
    x
    // todo create
    app.post('/api/todo', function(req, res) {
       res.end(); 
    });
    
    // todo :user_id delete
    app.delete('/api/todo/:user_id', function(req, res) {
       res.end(); 
    });
*/

    /* GET home page. */

    app.get('/prod_chg/:id', function(req,res){
        console.log("prod_id:",req.params.id);
        ProdModel.findById(req.params.id, function(err,prod){
        console.log("Prod_info:",prod);
        if(err) return res.json({success:false,message:err});
        res.render("prod_chg/prodChgAction",{data:prod});
        });
    }); 
}