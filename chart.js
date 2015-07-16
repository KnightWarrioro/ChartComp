var React = require('react');
var high = require('./chart/js/highcharts')
var exp = require('./chart/js/exporting')
var more = require('./chart/js/highcharts-more')
var drilldown = require('./chart/js/drilldown.src')

Charts = React.createClass({

	getInitialState: function(){
		return {
			chartData:{},
			chartType:{}
		} ; 
	},
	componentWillMount: function(){
		this.loadData(this.props.url,this.props.type);
	},
	render :  function ()
	{
		if(this.state.chartData != ""){
			var place=$('#'+this.props.name);
			
			var xx=place.highcharts(this.state.chartData);
				
			return <div className="chart-container" id={this.props.name} style={{width:'50%', display:'inline-block'}}></div>
		}
		else
		{
			return null;
		}
	},
	loadData : function(url,type) {
		var that = this;
		$.getJSON(url,function(jsonData){
			that.setState({chartData : jsonData})
		})
		this.setState({chartType : type })
	}
	
});

module.exports = Charts