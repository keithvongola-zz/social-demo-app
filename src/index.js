import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WaitUntilLoadedHOC from './pages/WaitUntilLoadedHOC';
import RootNavigator from './navigators';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WaitUntilLoadedHOC>
          <RootNavigator />
        </WaitUntilLoadedHOC>
      </Provider>
    );
  }
}
