module.exports = function(app, Evntgold) {


    // 이벤트 응모현황 조회
    app.get('/evnt_mng/evnt_rslt', function(req, res, next) {
        if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
        
        var evntradio = req.query.evntradio;
        Evntgold.aggregate([

              { $match : {} },
              { $group : {
                  _id : { gold_svc_num: "$gold_svc_num"},
                  count: { $sum: 1 }
                }
              },
              { $sort : { gold_svc_num : 1} }
      
        ], function (err, evntgolds) {
                if(err)return console.log("Data ERROR:",err);
                res.render('evnt_mng/goldView',{data:evntgolds,data2:null, user_session:req.session});
        });
          
    });


    // // 이벤트 당첨결과 조회
    // app.get('/evnt_rslt', function(req, res, next) {
    //     if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
        
    //     var evntradio = req.query.evntradio;
        
    //     Evntgold.aggregate([

    //           { $match : { gold_svc_num:evntradio} },
    //           { $group : {
    //               _id : { gold_svc_num: "$gold_svc_num"},
    //               count: { $sum: 1 }
    //             }
    //           },
    //           { $sort : { gold_svc_num : 1} }
      
    //     ], function (err, evntgolds) {
    //             if(err)return console.log("Data ERROR:",err);
    //             res.render('evnt_mng/goldView',{data:null,data2:evntgolds, user_session:req.session});
    //     });
          
    // });
    
}