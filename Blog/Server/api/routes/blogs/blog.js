var express = require('express');
var router = express.Router();
var Blog = require('../../../models/blogs/blog');

router.route('/blog')
// Get all posts
    .get(function(req, res){
      Blog.find(function(err, blog_posts) {
            if (err)
                res.send(err);
            res.json(blog_posts);
        });
    });

        // Get the post by id
    router.route('/post/:post_id')

        .get(function(req, res) {
          Blog.findById(req.params.post_id, function(err, post) {
            if (err)
              res.send(err);

            res.json(post);
          });
        })

//adding blog to database
router.route('/blog/add')
    .post(function (req, res) {
      var blog_model = new Blog();
      blog_model.title       =   req.body.addTitle;
      blog_model.topic       =   req.body.addTopic;
      blog_model.text        =   req.body.addText;
      blog_model.author_name =   req.body.addAuthor;
      blog_model.poster      =   '/images/' + req.body.addPoster;
      blog_model.date=  new Date();
      blog_model.save(function (err) {
        if(err){
          res.send(err);
        }
        res.json({message: 'Post Added'});
      });

    });


module.exports = router;
