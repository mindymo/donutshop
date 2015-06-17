$("#downtown").append("<button>Downtown</button>");
$("#downtown button").click(function(){
	$(this).hide().show(downtownShop.shopReport());
});

$("#alberta").append("<button>Alberta</button>");
$("#hawthorne").append("<button>Hawthorne</button>");
$("#sellwood").append("<button>Sellwood</button>");
$("#sandy").append("<button>Sandy</button>");

// $("button").click(function () {
// 	$("#downtown span").show();
// });

// //Hide spoiler
// $(".spoiler span").hide();
// //Add a button
// $(".spoiler").append("<button>Reveal Spoiler!</button>");
// //When button pressed
// $("button").click(function(){
// //Show only the clicked spoiler
//   $(this).prev().show();
// //Get rid of button (part of click function!)
//   $(this).remove();
// });
