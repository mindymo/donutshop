//create buttons and shop reports

$("#downtown").append("<button>Downtown</button>");
$("#downtown button").click(function(){
	$(this).hide().replaceWith("<p>" + downtownShop.shopReport() + "</p>");
});

$("#alberta").append("<button>Alberta</button>");
$("#alberta button").click(function(){
	$(this).hide().replaceWith("<p>" + albertaShop.shopReport() + "</p>");
});

$("#hawthorne").append("<button>Hawthorne</button>");
$("#hawthorne button").click(function(){
	$(this).hide().replaceWith("<p>" + hawthorneShop.shopReport() + "</p>");
});

$("#sellwood").append("<button>Sellwood</button>");
$("#sellwood button").click(function(){
	$(this).hide().replaceWith("<p>" + sellwoodShop.shopReport() + "</p>");
});

$("#sandy").append("<button>Sandy</button>");
$("#sandy button").click(function(){
	$(this).hide().replaceWith("<p>" + sandyShop.shopReport() + "</p>");
});


