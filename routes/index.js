
module.exports = function(app, UserModel) {
    
    
    /* GET home page. */
    app.get('/login', function(req, res) {
      res.render('index', { title: 'MVNO ROOM' });
    });
    
    // /* GET Login */
    // app.get('/login', function(req, res) {
    //     // UserModel.findOne({phone_number: req.body.inputPN, birthday : req.body.inputBirth}
    //     //     , function(err, books){
    //     //         if(err) return res.status(500).send({error: 'database failure'});
    //     //         res.json(books);
    //     //     })
        
    //     res.redirect('main');
        
    // });
    
    // /* POST Login */
    // app.post('/login', function(req, res) {
    //     // UserModel.findOne({phone_number: req.body.inputPN, birthday : req.body.inputBirth}
    //     //     , function(err, books){
    //     //         if(err) return res.status(500).send({error: 'database failure'});
    //     //         res.json(books);
    //     //     })
        
    //     console.log("login data : " + req.body.inputPN)
    //     var pn = req.body.inputPN;
        
    //     res.redirect('/main');
    // });
/**
 * 
 * 
 * 
 *  로그인 세션 사용 시 참고 예제 */
    app.post('/login', function(req, res, next) {
    
      var user = {
        svc_num : req.body.inputPN,
        // pswd : req.body.userpswd
      };  // 사용자 요청 정보
    
      UserModel.findOne({phone_number:req.body.inputPN},function(err,data){
        if(err) return console.log("Data ERROR:",err);
        if(!data){
          // 비밀번호가 일치하지 않는 경우
          res.redirect('/');
          return;
        }
        // console.log("111111111111111111", req.body.inputPN);
        // console.log("111111111111111111", data);
        // console.log("UserModel.svc_num:", UserModel.svc_num);
        // console.log("data.phone_number:", data.phone_number);
        if(req.body.inputPN == data.phone_number){

          // 서비스 번호 존재
          req.session.regenerate(function (err) {
            if(err){
              console.log(err);
            } else {
              req.session.svc_num = data.phone_number;
              req.session.name = data.name;
              req.session.mvno_cd = data.mvno_cd;
              req.session.mvno_nm = data.mvno_nm;
              res.redirect('/main');
            }
          });
        } else {

          // 비밀번호가 일치하지 않는 경우
          //res.render('/',{msg:"서비스번호를 확인하세요"});
          res.redirect('/');
        }  

      })    
    
      // var db = {
      //   id : "userid",
      //   pswd : "userpswd"
      // };  // 사용차 요청 id 와 일치하는 정보를 데이터베이스에서 불러옴
    

    });
    
    app.get('/login', function(req, res, next) {
    
      console.log(req.session.svc_num);
    
      if(req.session.svc_num){
    
        // 세션 아이디가 존재
        // res.render('login', { title: 'loginSession' });
        res.redirect('/main');
    
      } else {
    
        // 세션 아이디가 존재하지 않음
        res.redirect('/');
    
      }
    });
    
    app.get('/logout', function(req, res, next) {
    
      console.log(req.session.svc_num);
    
      req.session.destroy(function(err){
        // 세션 정보 파괴
        res.redirect('/');
      })
    });
    
/*
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
}
