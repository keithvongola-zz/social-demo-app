import React, { PureComponent } from 'react';
import SplashScreen from './SplashScreen';

const SPLASH_DISP_MS = 1500;

class WaitUntilLoadedHOC extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pass: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pass: true });
    }, SPLASH_DISP_MS);
  }

  render() {
    const { pass } = this.state;
    const { children } = this.props;

    if (pass) return children;
    return <SplashScreen />;
  }
}


export default WaitUntilLoadedHOC;
