
module.exports = function(app, CustModel) {
    
    
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
    app.get('/cust_info', function(req, res) {
      CustModel.findOne({svc_num:"01029644930"},function(err,data){
        if(err)return console.log("Data ERROR:",err);
        res.render('cust_info/custInfoView',data);
      })
    });
    app.get('/prod_chg', function(req, res) {
        CustModel.findOne({svc_num:"01029644930"},function(err,cust){
             console.log("Data List:",cust);
            if(err)return console.log("Data ERROR:",err);
            res.render('prod_chg/prodChgView', {cust});
        })
    });
    /* GET home page. */
    app.get('/cust_info/vas_list', function(req, res) {
      CustModel.findOne({svc_num:"01025104930"},function(err,data){
        if(err)return console.log("Data ERROR:",err);
        res.render('cust_info/custInfoVasList',data);
      })
      
      //res.render('cust_info/custInfoVasList', { title: 'MVNO ROOM' });
    });
    
}