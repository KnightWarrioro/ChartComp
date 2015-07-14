var React = require('react');

var AddnewComponent = require('./add-new');
var SubContainer =  require('./container');
var MainComponent = React.createClass({
	getInitialState: function(){
		return{
			 dataStore :[]
		};
	},
	newItemAdded : function(urlData , type){ 
			if(urlData !="" && type!="")
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
				<SubContainer data={this.state.dataStore}/>
			</div>

		)
	}
});

module.exports = MainComponent;