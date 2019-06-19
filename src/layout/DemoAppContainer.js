/* eslint no-console: 0 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'startup/redux';
import ReduxToastr from 'react-redux-toastr';
import ModalDialog from 'components/common/dialogs/ModalDialog';

import DemoApp from './DemoApp';

export class DemoAppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DemoApp />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="bottom-right"
            transitionIn="bounceIn"
            transitionOut="bounceOut"
            progressBar
            closeOnToastrClick
          />
          <ModalDialog />
        </PersistGate>
      </Provider>
    );
  }
}

export default DemoAppContainer;
