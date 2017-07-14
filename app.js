var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    methodOverride = require("method-override"),
    Comment = require("./models/comment"),
    seedDB = require("./seed"),
    passport = require("passport"),
    User    = require("./models/user"),
    flash   = require("connect-flash"),
    LocalStrategy = require("passport-local")

//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")

    
//seedDB(); seed the db

//
// mongodb://vijay:reddy@ds151661.mlab.com:51661/yelpcamp

mongoose.connect(process.env.DATABASEURL, {
  useMongoClient: true,
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());
//passport config
app.use(require("express-session")({
    secret: "vijay yajiv",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campGrounds", campgroundRoutes);
app.use("/campGrounds/:id/comments", commentRoutes);




// Campground.create( {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg", description:"Very Scary place to visit in once in lifetime yours summer destination."}, 
// function(err, newlycreated){
//     if(err){
//         console.log("error!");
//     }
//     else{
//         console.log(newlycreated);
//     }
// });




app.listen(process.env.PORT, process.env.IP, function(){
   console.log("yelp camp started"); 
});

