import React, { Component } from 'react';

class HistorySample extends Component {
  
  handleGoBack = () => {
    this.props.history.goBack();
  };

  
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    console.log(this.props);
    
    this.unblock = this.props.history.block('Are sure to leave for?');
  }

  componentWillUnmount() {

    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Go back</button>
        <button onClick={this.handleGoHome}>Home</button>
      </div>
    );
  }
}

export default HistorySample;
