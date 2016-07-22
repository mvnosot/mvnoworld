
module.exports = function(app, Cust) {
    
    /* GET home page. */
    app.get('/', function(req, res) {
      res.render('intro', { title: 'MVNO ROOM' });
    });
}