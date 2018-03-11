var React = require('react');
var {Link}= require('react-router');

var Example = React.createClass({
    render: function () {
        return(
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are few example location to try out:</p>
                <ol>
                    <li>
                        <Link to="/?location=Mumbai">Mumbai, India</Link>
                    </li>
                    <li>
                        <Link to="/?location=Delhi">Delhi, India</Link>
                    </li>
                </ol>
            </div>

        );
    }
});

module.exports=Example