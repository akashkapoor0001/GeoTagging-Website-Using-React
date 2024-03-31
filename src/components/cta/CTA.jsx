import React from 'react';
import './cta.css';

class CTA extends React.Component {
  handleGetStartedClick = () => {
    // Open the Interface.html file hosted on a server in a new window
    window.open('https://ex/code/index.html', '_blank');
  }

  render() {
    return (
      <div className="gpt3__cta">
        <div className="gpt3__cta-btn">
          <button type="button" onClick={this.handleGetStartedClick}>Get Started</button>
        </div>
      </div>
    );
  }
}

export default CTA;
