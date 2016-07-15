module.exports = function(app, Numrsc) {
    
    // list
    app.get('/num_mng', function(req, res) {
        Numrsc.find({}).sort('svc_num').exec(function(err, numrscs){
            if(err)return console.log("Data ERROR:",err);
            res.render('num_mng/list',{data:numrscs});
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
    
    
    // 골드번호 유형 선택
    app.get('/num_mng/gold_list', function(req, res) {
      res.render('num_mng/gold_list',{data:null});
    });
    // 골드번호 라인번호 선택
    app.get('/num_mng/gold_list/:id', function(req, res) {
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
                res.render('num_mng/gold_list',{data:numrscs});
                // res.json({success:true,data:numrscs});
        });
    });
    // 골드번호 서비스번호 목록
    app.get('/num_mng/gold_list_2/:id', function(req, res) {
        Numrsc.find(
            
            { num_st_cd : "AV", rsv_num_cd:""+req.params.id.substr(0,1), line_num:""+req.params.id.substr(1) }
            
        ).sort('svc_num').exec(function(err, numrscs){
            if(err)return console.log("Data ERROR:",err);
            res.render('num_mng/gold_list_2',{data:numrscs});
        });
    });
    // 골드번호 서비스번호 선택
    app.get('/num_mng/gold_list_3/:id', function(req, res) {
        Numrsc.aggregate([

              { $match : { num_st_cd : "AV", svc_num:""+req.params.id} },
              { $group : {
                  _id : { svc_num: "$svc_num"},
                  count: { $sum: 1 }
                }
              },
              { $sort : { svc_num : 1} }
      
        ], function (err, numrscs) {
                if(err)return console.log("Data ERROR:",err);
                res.render('num_mng/gold_list',{data:numrscs});
                // res.json({success:true,data:numrscs});
        });
    });

        
    // show
    app.get('/num_mng/:id', function(req, res) {
         Numrsc.findById(req.params.id, function(err,numrscs){
            if(err)return console.log("Data ERROR:",err);
            res.render('num_mng/show',{data:numrscs});
         });
    });
    
}