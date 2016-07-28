module.exports = function(app, User) {
    
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

    /* singin : 인증Key 생성 */
    app.get('/cust_info/getSN/:id', function(req, res) {
      
      // generate inputSN
      var inputSN = (Math.random() + "").substr(2);
      
      // update inputSN
      User.findOneAndUpdate({phone_number:req.params.id}, {input_sn: inputSN}, function(err,cust){
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
      
      User.findOne({phone_number:inputPN, input_sn:inputSN},function(err,cust){
        if(err)return console.log("Data ERROR:",err);
        else console.log(">>>chkSN: inputPN=" + inputPN + ",inputSN=" + inputSN);
        res.json({cust});
      });
      
    });
    
}