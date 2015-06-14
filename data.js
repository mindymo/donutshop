var donutShops = [
	{name: "Downtown", perCust: 4.50},
	{name: "Alberta", perCust: 2.00}
	{name: "Hawthorne", perCust: 6,33}
	{name: "Sellwood", perCust: 1.25}
	{name: "Sandy", perCust: 3.75}
];

for (var shopData in donutShops) {
	console.log(shopData + ": " + donutShops[shopData]);
}