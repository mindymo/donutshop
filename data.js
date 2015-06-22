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
		var message = this.name + " Shop</br>" + this.donutPerCust + " donuts per customer</br>";
		var donutsPerHour = this.hourlyTotal();
		message += "Hourly customers: " + parseInt(donutsPerHour / this.donutPerCust) + "</br>";
		message += "Donuts per hour: " + donutsPerHour + "</br>";
		message += "Donuts needed daily: " + (donutsPerHour * this.hoursOpen());
		return message;
	};
}

var downtownShop = new Shop("Downtown", 4.50, 600, 1600, 43, 8);
var albertaShop = new Shop("Alberta", 2.00, 1000, 2000, 37, 4);
var hawthorneShop = new Shop("Hawthorne", 6.33, 900, 1700, 23, 9);
var sellwoodShop = new Shop("Sellwood", 1.25, 1100, 1500, 28, 2);
var sandyShop = new Shop("Sandy", 3.75, 500, 1500, 58, 8);

// console.log(downtownShop.shopReport());
// console.log(albertaShop.shopReport());
// console.log(hawthorneShop.shopReport());
// console.log(sellwoodShop.shopReport());
// console.log(sandyShop.shopReport());







 
