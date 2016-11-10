import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAeZbQTi7hqlXcaVB2GXS_PXyZ0EuVl-48';

// Create a component should produce some HTML
const App = () => {
  return <div> Hello! </div>
}

// Take this component and put it inside the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
