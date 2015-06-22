
$("#downtown").click(function(){
    var $this = $(this);
    if ($this.hasClass("clicked-once")) {
        $(".report").html("<h2>Mmmm</h2>");	
    }
    else {
        $this.html("<div class='report'>" + downtownShop.shopReport() + "</div>");
        $this.addClass("clicked-once");
    }
});

$("#alberta").click(function(){
    var $this = $(this);
    if ($this.hasClass("clicked-once")) {
        $(".report").html("<h2>Mmmm</h2>");	
    }
    else {
        $this.html("<div class='report'>" + albertaShop.shopReport() + "</div>");
        $this.addClass("clicked-once");
    }
});

$("#hawthorne").click(function(){
    var $this = $(this);
    if ($this.hasClass("clicked-once")) {
        $(".report").html("<h2>Mmmm</h2>");	
    }
    else {
        $this.html("<div class='report'>" + hawthorneShop.shopReport() + "</div>");
        $this.addClass("clicked-once");
    }
});

$("#sellwood").click(function(){
    var $this = $(this);
    if ($this.hasClass("clicked-once")) {
        $(".report").html("<h2>Mmmm</h2>");	
    }
    else {
        $this.html("<div class='report'>" + sellwoodShop.shopReport() + "</div>");
        $this.addClass("clicked-once");
    }
});

$("#sandy").click(function(){
    var $this = $(this);
    if ($this.hasClass("clicked-once")) {
        $(".report").html("<h2>Mmmm</h2>");	
    }
    else {
        $this.html("<div class='report'>" + sandyShop.shopReport() + "</div>");
        $this.addClass("clicked-once");
    }
});

$("#donut").click(function(){
	$(this).html("<div id='homer'></div>");
});







