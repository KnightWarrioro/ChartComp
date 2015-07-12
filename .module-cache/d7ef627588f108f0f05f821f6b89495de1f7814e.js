var React = require('react');
var BarChart = require('../barchart');




(function(){
	$.getJSON("http://dev.myntra.com:3000/chart/data/",function(jsonData){
		var barchart = React.createElement(BarChart);
	    React.render(barchart,document.body)
	});
});