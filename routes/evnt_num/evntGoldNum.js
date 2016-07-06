module.exports = function(app, User) {
    
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
    app.get('/evnt_num', function(req, res) {
      res.render('evnt_num/evntGoldNum', { title: 'MVNO ROOM' });
    });
    
    /* GET home page. */
    app.get('/evnt_num', function(req, res) {
      res.render('evnt_num/evntGoldNum', { title: 'MVNO ROOM' });
    });


}