
module.exports = function(app, Cust) {
    
    app.get('/main',function(req, res) {
        
        //var user_session = req.session.user
        //var phone_number = user_session.phone_number
        // var phone_number = '01029644930' // 테스트
        var phone_number =req.session.svc_num;
        
        Cust.findOne({svc_num: phone_number}, function(err, data){
                 if(err) return res.status(500).send({error: 'database failure'});
                 console.log(data);
                //  res.render('main', {data:data, user_session:req.session});
                 res.render('main', {data:data, user_session:req.session});
             })
    });
}