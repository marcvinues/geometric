var React = require('react');

var headItem = React.createClass({

  render: function() {
    return ( <div>
      <header>
      		<p className="title">Geometric shapes</p>
      		<p className="shapes"></p>
      </header>
      <div>
        <layoutItems />
      </div>
</div>
    );
  }

});

module.exports = headItem;
