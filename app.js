var React = require('react');
var MainComponent = require('./main_container');


var url_data = ["http://dev.myntra.com:3000/chart/data","http://dev.myntra.com:3000/chart/data"];
var type_data = ["line","bar"];


(function(){
	React.render(<MainComponent/>,document.getElementById('super-container'));
})();

