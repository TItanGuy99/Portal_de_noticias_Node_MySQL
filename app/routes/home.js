module.exports = function(app){
    app.get('/', function(req, res){
        //res.send("<html><body>Noticias de tecnologia</body></html>");
        res.render("home/index");
    });
};