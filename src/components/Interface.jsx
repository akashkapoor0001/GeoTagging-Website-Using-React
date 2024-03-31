import React from 'react';

class MyComponent extends React.Component {
  handleGetStartedClick = () => {
    // Open the index.html file in a new window
    window.open('index.html', '_blank');
  }

  render() {
    return (
      <div>
        {/* Attach the handleGetStartedClick function to the onClick event of the button */}
        <button onClick={this.handleGetStartedClick}>Get Started</button>
      </div>
    );
  }
}

export default MyComponent;