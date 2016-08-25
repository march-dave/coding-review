var HelloWorld = React.createClass({

  render: function() {
    return (
        <div>
          <h1>Hello World</h1>
          <p>This is some text</p>
        </div>
    );
  }

});

React.render(<HelloWorld />, document.body);




var HelloWorld = React.createClass({
  render: function() {
    return (
        React.createElement("div", null,
          React.createElement("h1", null, "Hello World"),
          React.createElement("p", null, "This is some text")
      )
      );
  }
});

React.render(React.createElement(HelloWorld, null), document.body);
