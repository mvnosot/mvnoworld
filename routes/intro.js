
module.exports = function(app, Cust) {
    
    /* GET home page. */
    app.get('/', function(req, res) {
      res.render('intro', { title: 'MVNO ROOM' });
    });
    
    /* GET home page. */
    app.get('/css', function(req, res) {
      res.render('test', { title: 'MVNO ROOM' });
    });
    
    /* GET home page. */
    app.get('/css.black', function(req, res) {
      res.render('test_black', { title: 'MVNO ROOM' });
    });
    
}