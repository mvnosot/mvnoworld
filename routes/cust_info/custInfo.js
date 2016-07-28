
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
      
      if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
      
      CustModel.findOne({svc_num:req.session.svc_num},function(err,data){
        if(err)return console.log("Data ERROR:",err);
        console.log("session:",data);
        // res.render('cust_info/custInfoView',data,{user_session:req.session.mvno_cd});
        res.render('cust_info/custInfoView',{data:data, user_session:req.session});
      })
    });

    /* GET home page. */
    app.get('/cust_info/vas_list', function(req, res) {
      
      if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
      
      CustModel.findOne({svc_num:req.session.svc_num},function(err,data){
        if(err)return console.log("Data ERROR:",err);
        res.render('cust_info/custInfoVasList',{data:data, user_session:req.session});
      })
      
      //res.render('cust_info/custInfoVasList', { title: 'MVNO ROOM' });
    });
    
    /* GET home page. */
    app.get('/cust_info/custInfoViewdtl', function(req, res) {
      
      if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
      
      CustModel.findOne({svc_num:req.session.svc_num},function(err,data){
        if(err)return console.log("Data ERROR:",err);
        res.render('cust_info/custInfoViewdtl',{data:data, user_session:req.session});
      })
      
      //res.render('cust_info/custInfoVasList', { title: 'MVNO ROOM' });
    });

    /* singin : 인증Key 생성 */
    app.get('/cust_info/getSN/:id', function(req, res) {
      
      // generate inputSN
      var inputSN = (Math.random() + "").substr(2);
      
      // update inputSN
      CustModel.findOneAndUpdate({svc_num:req.params.id}, {input_sn: inputSN}, function(err,cust){
          if(err)return console.log("Update ERROR:",err);
          console.log(">>>inputSN : " + inputSN);
      });
      
      // response
      res.json({inputSN});
    });
    
    /* signin : 인증Key 체크 */
    app.get('/cust_info/chkSN/:id', function(req, res) {
      
      var inputPN = req.params.id.substr(0,11);
      var inputSN = req.params.id.substr(11);
      
      CustModel.findOne({svc_num:inputPN, input_sn:inputSN},function(err,cust){
        if(err)return console.log("Data ERROR:",err);
        else console.log(">>>chkSN: inputPN=" + inputPN + ",inputSN=" + inputSN);
        res.json({cust});
      });
      
    });
    
}