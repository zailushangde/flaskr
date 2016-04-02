<script type="text/jsx">

  /*** @jsx React.DOM */

  var realPython = React.createClass({
		      render: function() {
		            return (<h2>Greetings, from Real Python!</h2>)
			        }
				  });

  React.render(
		      React.createElement(realPython, null),
		          document.getElementById('content')
			    );

  </script>
