

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
			var place=$('#'+this.props.name);
			
			var xx=place.highcharts(this.state.chartData);
				
			return <div className="chart-container" id={this.props.name} style={{width:'50%', display:'inline-block'}}></div>
	
	},
	loadData : function(url,type) {
		var that = this;
		$.getJSON(url,function(jsonData){
			that.setState({chartData : jsonData})
		})
		this.setState({chartType : type })
	}
	
});