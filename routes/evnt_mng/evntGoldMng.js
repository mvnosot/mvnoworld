module.exports = function(app, Evntgold) {


    // 응모건수 조회
    app.get('/evnt_mng', function(req, res, next) {
        var evntradio = req.query.evntradio;
        
        Evntgold.aggregate([

              { $match : { gold_svc_num:evntradio} },
              { $group : {
                  _id : { gold_svc_num: "$gold_svc_num"},
                  count: { $sum: 1 }
                }
              },
              { $sort : { gold_svc_num : 1} }
      
        ], function (err, evntgolds) {
                if(err)return console.log("Data ERROR:",err);
                res.render('evnt_mng/gold_list_3',{data:evntgolds,data2:evntradio,data3:null});
                // res.json({success:true,data:evntgolds});
        });
          
    });
    
    // 응모 요청
    app.post('/evnt_mng', function(req, res) {
        Evntgold.create(
            {
                gold_svc_num:req.body.gold_svc_num,
                achv_cd:req.body.achvradio
                
            },function(err,evntgolds){
            if(err)return console.log("Data ERROR:",err);
            res.redirect('/evnt_mng/show/'+req.body.gold_svc_num);
        });
    });

    // 응모결과 조회
    app.get('/evnt_mng/show/:id', function(req, res, next) {
        var svc_num = req.params.id;
        
        Evntgold.aggregate([

              { $match : { gold_svc_num:svc_num} },
              { $group : {
                  _id : { gold_svc_num: "$gold_svc_num"},
                  count: { $sum: 1 }
                }
              },
              { $sort : { gold_svc_num : 1} }
      
        ], function (err, evntgolds) {
                if(err)return console.log("Data ERROR:",err);
                res.render('evnt_mng/gold_list_3',{data:null,data2:null,data3:evntgolds});
        });
          
    });
    
}