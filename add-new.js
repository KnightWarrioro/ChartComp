var React = require('react');

var AddNewComponent = React.createClass({
	getInitialState : function(){
		return{
			urldata:{},
			typedata : {}
		}
	},
	onchange : function(event){
		this.props.onNewItemAdded(this.state.urldata,this.state.typedata);

	},
	changeurl : function(event)
	{
		this.setState({urldata : event.target.value})
	},
	changetype : function(event)
	{
		this.setState({typedata : event.target.value})
	},
	render : function()
	{
		return( 
			<div style={{'boxShadow':'0 0 4px #999', padding:'10px',marginBottom:"10px"}}>
				<div className="form-group form-md-line-input" style={{'display':"inline-block",'width':'38%'}}>
					<input type="text" className="form-control" placeholder="Enter url" required name="url" onChange={this.changeurl}/>
					<label for="form_control_1">Enter URL of data</label>
					<span className="help-block">Enter full url of data</span>
				</div>
				<div className="form-group form-md-line-input has-info" style={{'display':"inline-block",'width':'38%'}}>
					<select id="type" className="form-control" name="type" required onChange={this.changetype}>
						<option value="" >---SELECT---</option>
						<option value="line" >Line Graph</option>
						<option value="area" >Area Graph</option>
						<option value="bar" >Bar Graph</option>
						<option value="bubble" >Bubble Graph</option>
					</select>
					<label for="form_control_1">Select Type of Graph</label>

				</div>
				<input type="button" className='btn blue' value='Add chart' onClick = {this.onchange} style={{'display':"inline-block",'width':'18%'}} />
			</div>
		);
	}
});

module.exports = AddNewComponent;