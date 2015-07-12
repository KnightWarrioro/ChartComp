var React = require('react');
var high = require('./chart/js/highcharts')
var exp = require('./chart/js/exporting')

module.exports = React.createClass({

	render :  function()
	{
		console.log(this.props.data + '');
		debugger;
		return 
			<div id="chart-container"></div>
	},
	componentDidMount: function(){
		var x=$('#chart-container').highcharts(this.props.data.jsonData);
	}
});