
module.exports = function(app, User) {
    
    
    /* GET home page. */
    app.get('/', function(req, res) {
      res.render('index', { title: 'MVNO ROOM' });
    });
    
    /* GET Login */
    app.get('/login', function(req, res) {
        // User.findOne({phone_number: req.body.inputPN, birthday : req.body.inputBirth}
        //     , function(err, books){
        //         if(err) return res.status(500).send({error: 'database failure'});
        //         res.json(books);
        //     })
        
        res.render('main');
        
    });
    
    /* POST Login */
    app.post('/login', function(req, res) {
        // User.findOne({phone_number: req.body.inputPN, birthday : req.body.inputBirth}
        //     , function(err, books){
        //         if(err) return res.status(500).send({error: 'database failure'});
        //         res.json(books);
        //     })
        
        console.log("login data : " + req.body.inputPN)
        var pn = req.body.inputPN;
        res.render('main', { phone_number: pn });
        
    });
/**
 * 
 * 
 * 
 *  로그인 세션 사용 시 참고 예제 * 
    router.post('/', function(req, res, next) {
    
      var user = {
        id : req.body.userid,
        pswd : req.body.userpswd
      };  // 사용자 요청 정보
    
      var db = {
        id : "userid",
        pswd : "userpswd"
      };  // 사용차 요청 id 와 일치하는 정보를 데이터베이스에서 불러옴
    
      if(user.pswd === db.pswd){
    
        // 비밀번호가 일치하는 경우
        req.session.regenerate(function (err) {
          if(err){
            console.log(err);
          } else {
            req.session.user = user;
            res.redirect('/login');
          }
        });
    
      } else {
    
        // 비밀번호가 일치하지 않는 경우
        res.redirect('/');
    
      }
    });
    
    router.get('/login', function(req, res, next) {
    
      console.log(req.session.user);
    
      if(req.session.user){
    
        // 세션 아이디가 존재
        res.render('login', { title: 'loginSession' });
    
      } else {
    
        // 세션 아이디가 존재하지 않음
        res.redirect('/');
    
      }
    });
    
    router.get('/logout', function(req, res, next) {
    
      console.log(req.session.user);
    
      req.session.destroy(function(err){
        // 세션 정보 파괴
        res.redirect('/');
      })
    });
    
****** 참고 예제
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