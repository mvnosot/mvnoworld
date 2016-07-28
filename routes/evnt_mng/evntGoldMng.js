module.exports = function(app, Evntgold) {


    // 응모건수 조회
    app.get('/evnt_mng', function(req, res, next) {
        if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
        
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
                res.render('evnt_mng/goldSubmit',{data:evntgolds,data2:evntradio,data3:null, user_session:req.session});
        });
          
    });
    
    // 응모 요청
    app.post('/evnt_mng', function(req, res) {
        if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
        
        Evntgold.create(
            {
                evnt_cd:'gold',
                // req_dt:'20160701',
                svc_num:req.session.svc_num,
                mvno_co_cd:req.session.mvno_cd,
                mvno_nm:req.session.mvno_nm,
                cust_name:req.session.name,
                gold_svc_num:req.body.gold_svc_num,
                gold_idnt_num_cd:req.body.gold_svc_num.substr(0,3),
                gold_exg_num:req.body.gold_svc_num.substr(3,4),
                gold_line_num:req.body.gold_svc_num.substr(7),
                // rsv_num_cd:'1',
                achv_cd:req.body.achvradio
                
            },function(err,evntgolds){
            if(err)return console.log("Data ERROR:",err);
            res.redirect('/evnt_mng/'+req.body.gold_svc_num);
        });
    });

    // 응모결과 조회
    app.get('/evnt_mng/:id', function(req, res, next) {
        if (!req.session.svc_num) res.render('intro',{msg:'Termination Session! Try Login.'});
        
        Evntgold.aggregate([

              { $match : { gold_svc_num:req.params.id,svc_num:req.session.svc_num} },
              { $group : {
                  _id : { gold_svc_num: "$gold_svc_num"},
                  count: { $sum: 1 }
                }
              },
              { $sort : { gold_svc_num : 1} }
      
        ], function (err, evntgolds) {
                if(err)return console.log("Data ERROR:",err);
                res.render('evnt_mng/goldSubmit',{data:null,data2:null,data3:evntgolds, user_session:req.session});
        });
          
    });
    
}