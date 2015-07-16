var React = require('react');

var AddNewComponent = React.createClass({
	getInitialState : function(){
		return{
			urldata:{}
		}
	},
	onchange : function(event){
		this.props.onNewItemAdded(this.state.urldata,"line");

	},
	changeurl : function(event)
	{
		this.setState({urldata : event.target.value})
	},
	
	render : function()
	{
		return( 
			<div style={{'boxShadow':'0 0 4px #999', padding:'10px',marginBottom:"10px"}}>
				<div className="form-group form-md-line-input has-info" style={{'display':"inline-block",'width':'70%'}}>
					<select className="form-control" id="form_control_1" required name="url" onChange={this.changeurl}>
						<option value="">---Select Type---</option>
						<option value="http://dev.myntra.com:3000/chart/data/data_bubble.json">Bubbles graph</option>
						<option value="http://dev.myntra.com:3000/chart/data/data_bar.json">Bar Graph</option>
						<option value="http://dev.myntra.com:3000/chart/data/data_drilldown.json">Pie Graph</option>
					</select>
					<label for="form_control_1">Select type of chart</label>
				</div>
				<input type="button" className='btn blue' value='Add chart' onClick = {this.onchange} style={{'display':"inline-block",'width':'25%'}} />
			</div>
		);
	}
});

module.exports = AddNewComponent;