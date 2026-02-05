import React from 'react';
import {Provider} from 'react-redux';
import HomeStack from './src/navigation/HomeStack';
import {persistor, store} from './src/store/Store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
