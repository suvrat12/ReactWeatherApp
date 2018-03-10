var React = require('react');
var WeatherForm= require('WeatherForm')
var WeatherMessage= require('WeatherMessage');
var openWeatherMap= require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
      return {
          location : 'Delhi',
          temp: '88'
      }
    },

    handleSearch: function (location) {
        var that =this;
        openWeatherMap.getTemp(location).then(
            function (temp) {
                that.setState({
                    location: location,
                    temp: temp
                })
            },function (errorMessage) {
                alert(errorMessage)
            }
        )
    },
    render: function () {
        var {temp, location} = this.state;
        return(
            <div>
                <h2>Weather Component</h2>
                <WeatherForm OnSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
});

module.exports=Weather