import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './src/navigations/AuthNavigation';
import BottomtabNavigation from './src/navigations/BottomtabNavigation';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SchoolCode"
            component={AuthNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomtabNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

export default App;
