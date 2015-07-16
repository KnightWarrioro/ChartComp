var React = require('react');

var AddnewComponent = require('./add-new');
var ChartSet =  require('./chartSet');
var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			 dataStore :[]
		};
	},
	newItemAdded : function(urlData , type){ 
			if(urlData !="")
			{
			    var newArray = this.state.dataStore.slice();    
			    newArray.push({url:urlData ,type: type });   
			    this.setState({dataStore:newArray});
			}
	},
	render : function()
	{
		
		return(
			<div>
				<AddnewComponent onNewItemAdded={this.newItemAdded} />
				<ChartSet data={this.state.dataStore}/>
			</div>

		)
	}
});

module.exports = MainComponent;