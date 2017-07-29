var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");


//Index show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds/Index",{campgrounds:allCampgrounds,  page: 'campgrounds'});
       }
    });
});


//new route
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});


//create route add to db
router.post("/", middleware.isLoggedIn, function(req, res){

    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var price = req.body.price;
    var newcampGrounds= {name:name , image:image, description:desc, author: author, price: price};
    //campgrounds.push(newcampGrounds);
    
    Campground.create( newcampGrounds, function(err, newlycreated){
      if(err){
          console.log("error!!");
      } 
      else {
          res.redirect("/campGrounds");
          
      }
   });
 
});

//show more info about specific camp
router.get("/:id", function(req, res) {
   Campground.findById(req.params.id).populate("comments").exec(function(err, foundGround){
      if(err){
          console.log("error!!");
      }
      else{
          console.log(foundGround);
          res.render("campgrounds/show",{camps: foundGround});
      }
   });
});


//edit

router.get("/:id/edit", middleware.checkCampGroundOwner, function(req, res) {
        Campground.findById(req.params.id, function(err, foundCampGround){
                      res.render("campgrounds/edit", {campground: foundCampGround});
        });
});

//update

router.put("/:id", middleware.checkCampGroundOwner, function(req, res){
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updated){
     if(err){
         res.redirect("/campGrounds");
     }  
     else{
         res.redirect("/campGrounds/"+req.params.id);
     }
   });
});


// Destroy

router.delete("/:id", middleware.checkCampGroundOwner, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/campGrounds");
        }
    }); 
    
});




//middleware


//check 





module.exports = router;    