var Avatar = React.createClass({

	getDefaultProps: function() {
		return {
			path: "assets/img/react.png"
		}
	},

	render: function() {
		return (
			<div>
				<img src={this.props.path} />
			</div>
		);
	}

});

React.render(<Avatar path="assets/img/laravel.png"/>, document.body);
