'use strict';

var response = require('./res');
var connection = require('./conn');

exports.blog = function(req, res) {
    connection.query('SELECT * FROM blog', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findBlog = function(req, res) {
    
    var blog_id = req.params.blog_id;

    connection.query('SELECT * FROM blog where id_blog = ?',
    [ blog_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createBlog = function(req, res) {
    
    var nama_blog = req.body.nama_blog;
    var detail = req.body.detail;
    

    connection.query('INSERT INTO blog (nama_blog, detail) values (?,?)',
    [ nama_blog, detail ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan blog!", res)
        }
    });
};

exports.updateBlog = function(req, res) {
    
    var blog_id = req.body.blog_id;
    var nama_blog = req.body.nama_blog;
    var detail = req.body.detail;

    connection.query('UPDATE blog SET nama_blog = ?, detail = ? WHERE id_blog = ?',
    [ nama_blog, detail, blog_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah blog!", res)
        }
    });
};

exports.deleteBlog = function(req, res) {
    
    var blog_id = req.body.blog_id;

    connection.query('DELETE FROM blog WHERE id_blog = ?',
    [ blog_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus blog!", res)
        }
    });
};