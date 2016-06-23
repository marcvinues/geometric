var React = require('react'),
    Header = require('./Header');

var PropTypes = React.PropTypes;

var layoutItems = React.createClass({

  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <button type="button" id="square" name="Square" className="btn btn-warning btn-lg btn-block">Square</button>
          </div>
          <div className="col-md-3">
            <button type="button" id="diamond" name="Square" className="btn btn-warning btn-lg btn-block">Diamond</button>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div id="q" className="col-md-3 col-md-offset-5 cont"></div>
          <div className="col-md-4 col-md-offset-5 contd"></div>
        </div>
      </div>
    );
  }

});

module.exports = layoutItems;
