module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;

    req.assert('titulo','O título é obrigatório').notEmpty();
    req.assert('resumo','O resumo é obrigatório').notEmpty();
    req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','O autor é obrigatório').notEmpty();
    req.assert('data_noticia','A data é obrigatória').notEmpty();
    req.assert('noticia','A noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    console.log(erros);

    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
          res.redirect('/noticias');
    });
}