module.exports = function(app, Numrsc) {
    
    // list
    app.get('/num_mng', function(req, res) {
      if (!req.session.svc_num) {
          res.render('intro',{msg:'Termination Session! Try Login.'});
          return;
      }
        
        Numrsc.find({}).sort('svc_num').exec(function(err, numrscs){
            if(err)return console.log("Data ERROR:",err);
            res.render('num_mng/list',{data:numrscs, user_session:req.session});
        });
    });
    
    // new
    app.get('/num_mng/new', function(req, res) {
      res.render('num_mng/new');
    });
    app.post('/num_mng', function(req, res) {
        Numrsc.create(req.body.numrsc,function(err,numrsc){
            if(err)return console.log("Data ERROR:",err);
            res.redirect('/num_mng');
        });
    });
    app.put('/num_mng/:id', function(req, res) {
        Numrsc.findByIdAndUpdate(req.params.id, req.body.numrsc, function(err,numrsc){
            if(err)return console.log("Data ERROR:",err);
            res.json({success:true, message:numrsc._id + " update."});
        });
    });
    
    
    // 골드번호 유형 선택
    app.get('/num_mng/goldList', function(req, res) {
      if (!req.session.svc_num) {
          res.render('intro',{msg:'Termination Session! Try Login.'});
          return;
      }
      
      res.render('num_mng/goldList',{data:null, user_session:req.session});
    });
    // 골드번호 라인번호 선택
    app.get('/num_mng/goldList/:id', function(req, res) {
        Numrsc.aggregate([

              { $match : { num_st_cd : "AV", rsv_num_cd:""+req.params.id} },
              { $group : {
                  _id : { rsv_num_cd: "$rsv_num_cd", idnt_num_cd: "$idnt_num_cd", line_num: "$line_num" },
                  count: { $sum: 1 }
                }
              },
              { $sort : { exg_num : 1} }
      
        ], function (err, numrscs) {
                if(err)return console.log("Data ERROR:",err);
                res.json({numrscs});
        });
    });
    // 골드번호 서비스번호 목록
    app.get('/num_mng/goldList2/:id', function(req, res) {
        Numrsc.find(
            
            { num_st_cd : "AV", rsv_num_cd:""+req.params.id.substr(0,1), line_num:""+req.params.id.substr(1) }
            
        ).sort('svc_num').exec(function(err, numrscs){
            if(err)return console.log("Data ERROR:",err);
            res.json({numrscs});
        });
    });


        
    // show
    app.get('/num_mng/:id', function(req, res) {
      if (!req.session.svc_num) {
          res.render('intro',{msg:'Termination Session! Try Login.'});
          return;
      }
        
        Numrsc.findById(req.params.id, function(err,numrscs){
            if(err)return console.log("Data ERROR:",err);
            res.render('num_mng/show',{data:numrscs, user_session:req.session});
            // res.json({numrscs});
        });
    });
    
}