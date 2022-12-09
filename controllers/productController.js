const db = require('../src/database/models/index.js');
const productController = {
    
    listado: function(req,res) {
       db.Productos.findAll()
        .then(function(productos){
            console.log(productos);
            res.render('listado',{productos})
        })
    }

};

module.exports = productController;