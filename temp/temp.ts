import * as React from 'react';
import * as ReactDOM from 'react-dom';


console.log("test");
import FlowButton from '../src/index';

ReactDOM.render(
  React.createElement(FlowButton, null, null), 
  document.getElementById("app")
);