var React = require('react');
var high = require('./chart/js/highcharts')
var exp = require('./chart/js/exporting')

module.exports = React.createClass({

	getInitialState: function(){
		return {chartData:{}} ; 
	},
	componentWillMount(){
		this.loadData(this.props.url);
	},
	render :  function ()
	{
		var xx=$('#chart-container').highcharts(this.state.chartData);
		return <div id="chart-container"></div>
	},
	loadData : function(url) {
		var that = this;
		$.getJSON(url,function(jsonData){
			that.setState({chartData : jsonData})
		})
	}
	
});