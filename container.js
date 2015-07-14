var React = require('react');
var Chart = require('./barchart');

var SubContainer = React.createClass({
	render : function()
	{
        return (
	      <div>
	        {
		        this.props.data.map(function(result,index) {
		        	console.log(result)
		          return <Chart name={'chart-'+index} url={result.url} type={result.type}/>;
		        })
	    	}
	      </div>
	    );
	}
});
module.exports= SubContainer;