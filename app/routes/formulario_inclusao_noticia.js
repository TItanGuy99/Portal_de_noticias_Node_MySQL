module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        //res.send("<html><body>Portal de noticias</body></html>");
        res.render("admin/form_add_noticia");
    });
};