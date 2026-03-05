import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './src/redux/store';

import AuthNavigation from './src/navigations/AuthNavigation';
import BottomtabNavigation from './src/navigations/BottomtabNavigation';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="Home" component={BottomtabNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;
