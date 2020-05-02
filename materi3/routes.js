'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/blog')
        .get(todoList.blog); 
    app.route('/blog/:blog_id')
        .get(todoList.findBlog);

    app.route('/blog')
        .post(todoList.createBlog);

    app.route('/blog')
        .put(todoList.updateBlog);
    
    app.route('/blog')
        .delete(todoList.deleteBlog);
};