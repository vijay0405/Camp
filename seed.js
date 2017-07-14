
// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment = require("./models/comment");


// var data = [
//         {
//             name:"Tsomoriri Camp – Ladakh",
//             image:"https://www.holidify.com/blog/wp-content/uploads/2016/08/Tsomoriri.jpg",
//             description:"Tsomoriri Lake is the highest lake in the world and located in Ladakh. Camping here is the experience of a lifetime. The lake is completely frozen during the winters and is an excitingly unique thing to witness. The best time to camp here is during May to September and it is simply wonderful to spend time in the decorated tents. You can trek in the nearby Ladakh region and witness the mesmerizing sunset at the lake. The best part is that the tents are comfortable with electricity supply."
//         },
//         {
//             name:"2. Camp Exotica – Kullu",
//             image:"https://www.holidify.com/blog/wp-content/uploads/2016/08/camp-exotica.jpg",
//             description:"Tsomoriri Lake is the highest lake in the world and located in Ladakh. Camping here is the experience of a lifetime. The lake is completely frozen during the winters and is an excitingly unique thing to witness. The best time to camp here is during May to September and it is simply wonderful to spend time in the decorated tents. You can trek in the nearby Ladakh region and witness the mesmerizing sunset at the lake. The best part is that the tents are comfortable with electricity supply."
//         },
//         {
//             name:"3. Camp Room on the Roof – Dehradun",
//             image:"https://www.holidify.com/blog/wp-content/uploads/2016/08/camp-room-on-the-roof.jpg",
//             description:"Tsomoriri Lake is the highest lake in the world and located in Ladakh. Camping here is the experience of a lifetime. The lake is completely frozen during the winters and is an excitingly unique thing to witness. The best time to camp here is during May to September and it is simply wonderful to spend time in the decorated tents. You can trek in the nearby Ladakh region and witness the mesmerizing sunset at the lake. The best part is that the tents are comfortable with electricity supply."
//         }
//     ]

// function seedDB(){
//     //remove camps
//     Campground.remove({}, function(err){
//         if(err){
//              console.log(err);
//          }
//         // console.log("campgrounds removed"); 
//         // //add campgrounds
//         // data.forEach(function(seed){
//         //     Campground.create(seed, function(err, campground){
//         //         if(err){
//         //             console.log(err);
//         //         } 
//         //         else{
//         //             console.log("added campgrounds");
//         //             //create comment
//         //             Comment.create({
//         //                 text: "Awesome places",
//         //                 author: "kalpana"
//         //             },function(err, comment){
//         //               if(err){
//         //                   console.log(err);
//         //               } 
//         //               else{
//         //                   campground.comments.push(comment);
//         //                   campground.save();
//         //                   console.log("created new comment");
//         //               }
//         //             });
//         //         }
//         //     });
//         // });
//     });  
// }

// module.exports = seedDB;
