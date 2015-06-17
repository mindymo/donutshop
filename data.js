function Shop(name, donutPerCust, open, close, maxPerHour, minPerHour) {
	this.name = name;
	this.donutPerCust = donutPerCust;
	this.open = open;
	this.close = close;
	this.maxPerHour = maxPerHour;
	this.minPerHour = minPerHour;
	this.hoursOpen = function() {
		return (this.close - this.open) / 100;
	};
	this.hourlyTotal = function() {
		return this.donutPerCust * (Math.floor((Math.random() * this.maxPerHour) 
			+ this.minPerHour));
	};
	this.shopReport = function() {
		var message = this.name + " is open for " + this.hoursOpen() + " hours.\n";
		message += "Each customer buys " + this.donutPerCust + " donuts.\n";
		var donutsPerHour = this.hourlyTotal();
		message += "An estimated " + parseInt(donutsPerHour / this.donutPerCust) + 
		" customers will visit the shop every hour today.\n";
		message += "On average, " + donutsPerHour + " donuts are sold each hour.\n";
		message += "In total, " + (donutsPerHour * this.hoursOpen()) + 
		" donuts are needed today.\r";
		return message;
	};
}

var downtownShop = new Shop("Downtown", 4.50, 600, 1600, 43, 8);
var albertaShop = new Shop("Alberta", 2.00, 1000, 2000, 37, 4);
var hawthorneShop = new Shop("Hawthorne", 6.33, 900, 1700, 23, 9);
var sellwoodShop = new Shop("Sellwood", 1.25, 1100, 1500, 28, 2);
var sandyShop = new Shop("Sandy", 3.75, 500, 1500, 58, 8);

console.log(downtownShop.shopReport());
console.log(albertaShop.shopReport());
console.log(hawthorneShop.shopReport());
console.log(sellwoodShop.shopReport());
console.log(sandyShop.shopReport());







 
