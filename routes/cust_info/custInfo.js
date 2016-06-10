
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
    app.get('/cust_info', function(req, res) {
      res.render('cust_info/custInfoView', { title: 'MVNO ROOM' });
    });

    /* GET home page. */
    app.get('/cust_info/vas_list', function(req, res) {
      res.render('cust_info/custInfoVasList', { title: 'MVNO ROOM' });
    });
    
}