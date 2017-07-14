var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");


//comments new
router.get("/new",middleware.isLoggedIn ,function(req, res){
   Campground.findById(req.params.id, function(err, campground){
      if(err){
          console.log(err);
      }
      else{
          res.render("comments/new", {campground: campground});
      }
      
   });
   
});


//comments create
router.post("/", middleware.isLoggedIn, function(req, res){
   Campground.findById(req.params.id, function(err, campground){
      if(err){
          console.log(err);
          res.redirect("/campGrounds");
      }
      else{
          Comment.create(req.body.comment, function(err, comment){
            if(err){
                req.flash("error", "Something went Wrong");
                console.log(err);
            } 
            else{
                comment.author.id = req.user._id;
                comment.author.username = req.user.username;
                comment.save();
                campground.comments.push(comment);
                campground.save();
                req.flash("success", "Successfully added comment");
                res.redirect("/campGrounds/"+ campground._id);
            }
          });
      }
       
   });
   
    
});


// comment edit route
router.get("/:comment_id/edit", middleware.checkCommentOwner, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComments) {
        if(err){
            res.redirect("back");
        } else {
                res.render("comments/edit", {campground_id : req.params.id, comment: foundComments});
        }
    })
    
});

//comment update route
router.put("/:comment_id", middleware.checkCommentOwner, function(req, res){

    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err , updatedCommennt){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/campGrounds/" + req.params.id);
        }    
    });
});

//Destroy comments

router.delete("/:comment_id", middleware.checkCommentOwner, function(req, res){
  Comment.findByIdAndRemove(req.params.comment_id, function(err){
      if(err){
          res.redirect("back");
      }
      else{
           req.flash("success", "Comment deleted");
          res.redirect("/campGrounds/"+ req.params.id);
      }
  })
});


module.exports = router;    